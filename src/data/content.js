import { calculateYearsOfExperience, getProfileConfig } from '../utils/profileUtils';

const config = getProfileConfig();
const yearsOfExperience = calculateYearsOfExperience();

export const personalInfo = {
  name: config.name,
  title: config.title,
  description: `Seasoned Full-Stack Software Developer and DevOps specialist at Ericsson with over ${yearsOfExperience} years of experience`,
  education: "Master of Science (M.Sc.) in Computer Science from McGill University",
  linkedin: "https://www.linkedin.com/in/victor-barbarosh-56a03743",
  github: "https://github.com/vBarbaros"
};

export const platforms = {
  baeldung: {
    name: "Baeldung",
    url: "https://www.baeldung.com/author/victorbarbarosh",
    description: "In-depth articles on Java Core, Spring Framework, Linux, and Computer Science",
    image: "/assets/images/baeldung.png"
  },
  medium: {
    name: "Medium",
    url: "https://medium.com/@geeks.sw.gig",
    description: "Creative writings, haikus, and technical content",
    image: "/assets/images/medium.png"
  },
  substack: {
    name: "Substack",
    url: "https://thecybersecurity.substack.com/",
    description: "The Cybersecurity Newsletter | Your Monday cybersec intelligence briefing",
    image: "/assets/images/substack.png"
  }
};

export const experience = [
  {
    title: "Senior Full Stack & DevOps Developer",
    company: "Ericsson",
    period: "October 2022 – Present",
    description: "Leading full-stack development projects with SpringBoot, Angular, and PostgreSQL"
  },
  {
    title: "Full Stack Software Developer",
    company: "Ericsson",
    period: "May 2019 – October 2022",
    description: "Developed critical features using PHP, Angular, and SpringBoot"
  }
];
