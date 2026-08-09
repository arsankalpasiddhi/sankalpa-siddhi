// Image Map for Sankalpa Siddhi Website
const imageMap = {
  logo: '/images/logo.jpeg',
  akella_raghavendra: '/images/akella_raghavendra.png',
  akella_sir_teaching: '/images/akella_sir_teaching.png',
  camp_poster: '/images/camp_poster.jpeg',
  classroom_hero: '/images/classroom_hero.jpeg',
  classroom_students: '/images/classroom_students.jpeg',
  digital_board_setup: '/images/digital_board_setup.jpg',
  volunteer_faculty: '/images/volunteer_faculty.jpg',
  online_class_preview: '/images/online_class_preview.jpeg',
  
  // News Articles
  news_article_1: '/images/news_article_1.jpeg',
  news_article_2: '/images/news_article_2.jpeg',
  news_article_3: '/images/news_article_3.jpeg',
  
  // Faculty Members 1-12
  faculty_1: '/images/faculty_1.jpg',
  faculty_2: '/images/faculty_2.png',
  faculty_3: '/images/faculty_3.png',
  faculty_4: '/images/faculty_4.png',
  faculty_5: '/images/faculty_5.png',
  faculty_6: '/images/faculty_6.png',
  faculty_7: '/images/faculty_7.png',
  faculty_8: '/images/faculty_8.png',
  faculty_9: '/images/faculty_9.png',
  faculty_10: '/images/faculty_10.jpeg',
  faculty_11: '/images/faculty_11.png',
  faculty_12: '/images/faculty_12.png',
};

export const getImageUrl = (key) => {
  if (imageMap[key]) {
    return imageMap[key];
  }
  // Fallback check
  return `/images/${key}`;
};

export default imageMap;
