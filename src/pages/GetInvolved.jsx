import React, { useState, useEffect } from 'react';
import { HeartHandshake, School, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { getImageUrl } from '../utils/imageHelper';
import EditorialHeader from '../components/EditorialHeader';

export default function GetInvolved({ initialTab = 'volunteer', setInvolvedTab }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (setInvolvedTab) setInvolvedTab(tab);
  };

  // Volunteer Form State
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    expertise: 'Mathematics (IIT-JEE)',
    otherExpertise: '',
    message: ''
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerError, setVolunteerError] = useState('');

  // School Request Form State
  const [schoolForm, setSchoolForm] = useState({
    schoolName: '',
    mandalDistrict: '',
    principalName: '',
    designation: 'Headmaster / Principal',
    phone: '',
    email: '',
    studentCount: ''
  });
  const [schoolSubmitted, setSchoolSubmitted] = useState(false);
  const [schoolError, setSchoolError] = useState('');

  // Volunteer Submit Handler with mailto integration & validation
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerError('');
    if (!volunteerForm.fullName.trim() || !volunteerForm.email.trim() || !volunteerForm.phone.trim() || !volunteerForm.location.trim()) {
      setVolunteerError('Please fill out all required fields marked with *');
      return;
    }
    if (volunteerForm.expertise === 'Others' && !volunteerForm.otherExpertise.trim()) {
      setVolunteerError('Please specify your custom expertise in the field provided.');
      return;
    }

    const selectedExpertise = volunteerForm.expertise === 'Others'
      ? `Others (${volunteerForm.otherExpertise})`
      : volunteerForm.expertise;

    const subject = encodeURIComponent(`Volunteer Application - ${volunteerForm.fullName}`);
    const body = encodeURIComponent(
      `Sankalpa Siddhi Volunteer Application\n` +
      `-----------------------------------------\n` +
      `Full Name: ${volunteerForm.fullName}\n` +
      `Email: ${volunteerForm.email}\n` +
      `Phone: ${volunteerForm.phone}\n` +
      `Location: ${volunteerForm.location}\n` +
      `Area of Expertise: ${selectedExpertise}\n` +
      `Message: ${volunteerForm.message}\n`
    );
    window.location.href = `mailto:akellaraghavendra@gmail.com?subject=${subject}&body=${body}`;
    setVolunteerSubmitted(true);
  };

  // School Request Submit Handler with mailto integration & validation
  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    setSchoolError('');
    if (!schoolForm.schoolName.trim() || !schoolForm.mandalDistrict.trim() || !schoolForm.principalName.trim() || !schoolForm.phone.trim() || !schoolForm.studentCount) {
      setSchoolError('Please fill out all required fields marked with *');
      return;
    }
    const subject = encodeURIComponent(`School Registration Request - ${schoolForm.schoolName}`);
    const body = encodeURIComponent(
      `Sankalpa Siddhi School Registration Request\n` +
      `-----------------------------------------\n` +
      `School Name: ${schoolForm.schoolName}\n` +
      `District / Mandal: ${schoolForm.mandalDistrict}\n` +
      `Principal / Contact Person: ${schoolForm.principalName}\n` +
      `Designation: ${schoolForm.designation}\n` +
      `Phone: ${schoolForm.phone}\n` +
      `Email: ${schoolForm.email}\n` +
      `Student Count (6th-10th): ${schoolForm.studentCount}\n`
    );
    window.location.href = `mailto:akellaraghavendra@gmail.com?subject=${subject}&body=${body}`;
    setSchoolSubmitted(true);
  };

  return (
    <div className="space-y-8 sm:space-y-10 pb-10">
      
      {/* 🤝 Editorial Header */}
      <EditorialHeader 
        badge="🤝 GET INVOLVED"
        title="Partner in"
        highlightedText="Transformation"
        subtitle="Join as a Guest Speaker / Volunteer Lecturer or request digital smart board installation for your government high school."
      />

      {/* Tab Switcher */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex bg-amber-500/10 p-1.5 rounded-full border border-amber-900/15 backdrop-blur-md shadow-sm">
          <button
            onClick={() => handleTabChange('volunteer')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'volunteer'
                ? 'bg-deepblue-900 text-white shadow-sm'
                : 'text-gray-700 hover:text-gray-950'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-saffron-400" /> Become a Volunteer Lecturer
          </button>
          <button
            onClick={() => handleTabChange('school')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'school'
                ? 'bg-saffron-500 text-white shadow-glow-saffron'
                : 'text-gray-700 hover:text-saffron-600'
            }`}
          >
            <School className="w-4 h-4 text-white" /> Request School Registration
          </button>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. VOLUNTEER REGISTRATION FORM */}
        {activeTab === 'volunteer' && (
          <div id="volunteer-registration" className="glass-card rounded-3xl p-6 sm:p-12 border border-amber-900/15 shadow-warm-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <img
                  src={getImageUrl("volunteer_faculty")}
                  alt="Volunteer Faculty"
                  className="w-full h-auto rounded-2xl object-cover shadow-warm-sm border border-amber-900/10"
                />
                <div className="p-5 bg-amber-500/10 rounded-2xl border border-amber-900/15 space-y-2 text-xs text-gray-900">
                  <h4 className="font-serif font-bold text-sm text-deepblue-900">Why Volunteer with Sankalpa Siddhi?</h4>
                  <p className="leading-relaxed font-light">
                    Share your knowledge as a <strong>Guest Speaker / Faculty</strong> with passionate government school students via live smart board sessions or weekend guest lectures.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                {volunteerSubmitted ? (
                  <div className="p-8 bg-cream-100 rounded-2xl border border-saffron-500/30 text-center space-y-4 animate-fadeIn">
                    <CheckCircle2 className="w-16 h-16 text-saffron-500 mx-auto" />
                    <h3 className="font-serif font-bold text-2xl text-gray-900">
                      Application Dispatched!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Thank you for volunteering! Your application details have been formatted and sent directly to <strong>akellaraghavendra@gmail.com</strong>. Our team will contact you shortly.
                    </p>
                    <button
                      onClick={() => setVolunteerSubmitted(false)}
                      className="px-6 py-2.5 bg-deepblue-900 text-white text-xs font-bold rounded-full shadow-sm cursor-pointer uppercase tracking-wider"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-5">
                    <div className="border-b border-amber-900/10 pb-3">
                      <h3 className="font-serif font-bold text-2xl text-gray-900">
                        Guest Speakers / Volunteer Application Form
                      </h3>
                      <p className="text-gray-600 text-xs mt-1 font-light">
                        Join our mentor network for IAS, IIT-JEE, NEET &amp; Skill Development.
                      </p>
                    </div>

                    {volunteerError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{volunteerError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-900">
                      <div className="space-y-1">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={volunteerForm.fullName}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rajesh@example.com"
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={volunteerForm.phone}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Current Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hyderabad / USA"
                          value={volunteerForm.location}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-xs font-semibold text-gray-900">
                      <label>Area of Expertise / Interest *</label>
                      <select
                        value={volunteerForm.expertise}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, expertise: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                      >
                        <option value="Mathematics (IIT-JEE)">Mathematics (IIT-JEE)</option>
                        <option value="Physics & Mechanics">Physics &amp; Mechanics</option>
                        <option value="Chemistry">Chemistry (Organic/Physical)</option>
                        <option value="Medical Sciences (NEET)">Medical Sciences (NEET)</option>
                        <option value="IAS General Studies">IAS General Studies &amp; Civics</option>
                        <option value="Memory & Morals">Memory, Ethics &amp; Personality</option>
                        <option value="English Communication">English Communication</option>
                        <option value="Others">Others</option>
                      </select>

                      {volunteerForm.expertise === 'Others' && (
                        <div className="pt-2 space-y-1 animate-fadeIn">
                          <label className="text-xs text-amber-900 font-bold">Specify Your Custom Expertise / Interest *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Data Science, Robotics, Art & Music, Mentorship..."
                            value={volunteerForm.otherExpertise}
                            onChange={(e) => setVolunteerForm({ ...volunteerForm, otherExpertise: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 text-xs font-semibold text-gray-900">
                      <label>Message / Background Details</label>
                      <textarea
                        rows={3}
                        placeholder="Share details about your educational background, domain expertise, and availability..."
                        value={volunteerForm.message}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-amber-600 focus:outline-none bg-white/70 backdrop-blur-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-deepblue-900 to-slate-950 hover:from-slate-950 hover:to-deepblue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-saffron-400" /> Submit Volunteer Application
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

        {/* 2. SCHOOL REQUEST FORM */}
        {activeTab === 'school' && (
          <div id="school-registration" className="glass-card rounded-3xl p-6 sm:p-12 border border-amber-900/15 shadow-warm-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <img
                  src={getImageUrl("classroom_students")}
                  alt="Government School Classroom"
                  className="w-full h-auto rounded-2xl object-cover shadow-warm-sm border border-amber-900/10"
                />
                <div className="p-5 bg-saffron-500/10 rounded-2xl border border-saffron-500/20 space-y-2 text-xs text-gray-900">
                  <h4 className="font-serif font-bold text-sm text-saffron-600">Digital Classroom Eligibility</h4>
                  <p className="leading-relaxed font-light">
                    Government high schools with students from 6th to 10th grade are eligible for free digital smart board installation and Super 100 access.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                {schoolSubmitted ? (
                  <div className="p-8 bg-cream-100 rounded-2xl border border-saffron-500/30 text-center space-y-4 animate-fadeIn">
                    <CheckCircle2 className="w-16 h-16 text-saffron-500 mx-auto" />
                    <h3 className="font-serif font-bold text-2xl text-gray-900">
                      School Request Dispatched!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                      Your request for digital classroom installation has been formatted and sent directly to <strong>akellaraghavendra@gmail.com</strong>. Our coordinator will get in touch with the school principal.
                    </p>
                    <button
                      onClick={() => setSchoolSubmitted(false)}
                      className="px-6 py-2.5 bg-saffron-500 text-white text-xs font-bold rounded-full shadow-glow-saffron cursor-pointer uppercase tracking-wider"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSchoolSubmit} className="space-y-5">
                    <div className="border-b border-amber-900/10 pb-3">
                      <h3 className="font-serif font-bold text-2xl text-gray-900">
                        School Registration Request Form
                      </h3>
                      <p className="text-gray-600 text-xs mt-1 font-light">
                        Register your government school for digital smart boards &amp; Super 100 coaching.
                      </p>
                    </div>

                    {schoolError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{schoolError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-900">
                      <div className="space-y-1">
                        <label>School Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. ZPHS Gandeed"
                          value={schoolForm.schoolName}
                          onChange={(e) => setSchoolForm({ ...schoolForm, schoolName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>District / Mandal *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Gandeed, Mahabubnagar"
                          value={schoolForm.mandalDistrict}
                          onChange={(e) => setSchoolForm({ ...schoolForm, mandalDistrict: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Contact Person / Principal Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sri K. Ramachandram"
                          value={schoolForm.principalName}
                          onChange={(e) => setSchoolForm({ ...schoolForm, principalName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Designation *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Headmaster / Principal"
                          value={schoolForm.designation}
                          onChange={(e) => setSchoolForm({ ...schoolForm, designation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98490 12345"
                          value={schoolForm.phone}
                          onChange={(e) => setSchoolForm({ ...schoolForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label>School Email Address</label>
                        <input
                          type="email"
                          placeholder="zphs.gandeed@telangana.gov.in"
                          value={schoolForm.email}
                          onChange={(e) => setSchoolForm({ ...schoolForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-1">
                        <label>Student Strength (Grades 6th – 10th) *</label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 250"
                          value={schoolForm.studentCount}
                          onChange={(e) => setSchoolForm({ ...schoolForm, studentCount: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-amber-900/15 focus:border-saffron-500 focus:outline-none bg-white/70 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-saffron-500 to-amber-600 hover:from-saffron-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-glow-saffron flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" /> Submit School Registration Request
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </section>

    </div>
  );
}
