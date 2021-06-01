import React from 'react';
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Greg Knudsen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: "Greg Knudsen",
  subtitle: "Musician | Developer | Artist",
  subtitle2: "Teacher | Student",
  cta: "Learn More"
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  
  resume: 'https://resume.creddle.io/resume/c8eyer3gy37', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'brunzies.jpg',
    title: 'Brunzies',
    info: '',
    info2: '',
    url: 'https://www.brunzies.com',
    repo: 'https://github.com/gregknudsen/gatsby-brunzies', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dev.artist15@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gregknudsen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gregknudsen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
