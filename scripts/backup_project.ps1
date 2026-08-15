# Multi-Project Dedicated Backup Script for Antigravity & Source Code
param (
    [string]$ProjectRoot = "D:\Website",
    [string]$ProjectNameOverride = "Sankalpa Siddhi",
    [string]$ConversationId = "e20d74dd-2bb8-4fce-88fd-d685b38c1082"
)

$ErrorActionPreference = "Stop"

# 1. Detect Project Name & Set Base Backup Path
if (-not (Test-Path $ProjectRoot)) {
    $ProjectRoot = Get-Location
}

$ProjectName = if ($ProjectNameOverride) { $ProjectNameOverride } else { (Get-Item $ProjectRoot).Name }
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"

$BaseBackupDir = "D:\Akella Sir\Website Anti Gravity Backup\$ProjectName"
$ChatStateDir = Join-Path $BaseBackupDir "Antigravity_Chat_State"

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Starting Dedicated Backup for Project: $ProjectName" -ForegroundColor Cyan
Write-Host "Timestamp: $Timestamp" -ForegroundColor Yellow
Write-Host "Backup Location: $BaseBackupDir" -ForegroundColor Yellow
Write-Host "=========================================" -ForegroundColor Cyan

# Create Backup Directories
if (-not (Test-Path $BaseBackupDir)) {
    New-Item -ItemType Directory -Path $BaseBackupDir -Force | Out-Null
}
if (-not (Test-Path $ChatStateDir)) {
    New-Item -ItemType Directory -Path $ChatStateDir -Force | Out-Null
}

# 2. Archive Repository Source Code
$ZipFileName = "${ProjectName}_code_${Timestamp}.zip"
$ZipFilePath = Join-Path $BaseBackupDir $ZipFileName

Write-Host "`n[1/3] Archiving Repository Source Code..." -ForegroundColor Green

$gitPath = "C:\Users\bhanu\MinGit\cmd\git.exe"
if (Test-Path $gitPath) {
    $env:PATH = "C:\Users\bhanu\MinGit\cmd;$env:PATH"
    Push-Location $ProjectRoot
    & $gitPath archive -o $ZipFilePath HEAD
    Pop-Location
    Write-Host "  -> Created Git Source Archive: $ZipFilePath" -ForegroundColor Gray
} else {
    # Fallback to Compress-Archive excluding node_modules/dist
    $excludePatterns = @("node_modules", "dist", ".git", "project-full-backup-present.zip")
    $filesToZip = Get-ChildItem -Path $ProjectRoot | Where-Object { $excludePatterns -notcontains $_.Name }
    Compress-Archive -Path $filesToZip.FullName -DestinationPath $ZipFilePath -Force
    Write-Host "  -> Created Fallback Zip Archive: $ZipFilePath" -ForegroundColor Gray
}

# 3. Copy Antigravity Chat Database, History & Settings
Write-Host "`n[2/3] Backing Up Antigravity Chat State..." -ForegroundColor Green
$AppDataDir = "$env:USERPROFILE\.gemini\antigravity"

# Copy Conversation DB
$ConvDbFiles = Get-ChildItem -Path "$AppDataDir\conversations" -Filter "${ConversationId}.db*" -ErrorAction SilentlyContinue
if ($ConvDbFiles) {
    foreach ($file in $ConvDbFiles) {
        Copy-Item -Path $file.FullName -Destination $ChatStateDir -Force
        Write-Host "  -> Copied Conversation DB: $($file.Name)" -ForegroundColor Gray
    }
} else {
    Write-Host "  -> Copying all conversation databases..." -ForegroundColor Gray
    Copy-Item -Path "$AppDataDir\conversations\*.db*" -Destination $ChatStateDir -Force
}

# Copy Brain / Artifacts for this session
$BrainDir = "$AppDataDir\brain\$ConversationId"
if (Test-Path $BrainDir) {
    $TargetBrainDir = Join-Path $ChatStateDir "brain_$ConversationId"
    Copy-Item -Path $BrainDir -Destination $TargetBrainDir -Recurse -Force
    Write-Host "  -> Copied Session Artifacts & History: brain_$ConversationId" -ForegroundColor Gray
}

# Copy Global Antigravity Config / State Files
$StateFile = "$AppDataDir\antigravity_state.pbtxt"
if (Test-Path $StateFile) {
    Copy-Item -Path $StateFile -Destination $ChatStateDir -Force
    Write-Host "  -> Copied Antigravity State: antigravity_state.pbtxt" -ForegroundColor Gray
}

# 4. Summary Verification
Write-Host "`n[3/3] Verifying Backup Output..." -ForegroundColor Green
$CreatedZip = Get-Item $ZipFilePath -ErrorAction SilentlyContinue
$StateItems = Get-ChildItem $ChatStateDir

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "SUCCESS: Dedicated Backup Completed!" -ForegroundColor Green
Write-Host "Source Archive: $($CreatedZip.Name) ($([math]::Round($CreatedZip.Length / 1MB, 2)) MB)" -ForegroundColor Yellow
Write-Host "Chat State Files in: $ChatStateDir ($($StateItems.Count) items)" -ForegroundColor Yellow
Write-Host "=========================================" -ForegroundColor Cyan
