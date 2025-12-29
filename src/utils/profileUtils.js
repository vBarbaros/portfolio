import profileConfig from '../config/profile-config.json';
import platformsConfig from '../config/platforms-config.json';
import baeldungPosts from '../pages/Baeldung/posts/posts-list.json';
import mediumPosts from '../pages/Medium/posts/posts-list.json';
import substackPosts from '../pages/Substack/posts/posts-list.json';
import projects from '../pages/Projects/projects-list.json';

export const calculateYearsOfExperience = () => {
  const startDate = new Date(profileConfig.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  return diffYears;
};

export const calculateTotalArticles = () => {
  return baeldungPosts.length + mediumPosts.length + substackPosts.length;
};

export const calculateCompletedProjects = () => {
  return projects.filter(project => project.status === 'completed').length;
};

export const getPlatformCards = () => {
  const postCounts = {
    'Baeldung': baeldungPosts.length,
    'Medium': mediumPosts.length,
    'Substack': substackPosts.length
  };

  return platformsConfig.map(platform => ({
    ...platform,
    count: `${postCounts[platform.name]} ${platform.name === 'Medium' ? 'Stories' : platform.name === 'Baeldung' ? 'Articles' : 'Posts'}`
  }));
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured === true);
};

export const getProfileConfig = () => profileConfig;
