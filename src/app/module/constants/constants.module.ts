export interface skill {
  data:[
    {
      name: string;
      image: string;
      category: string;
    },
      ]
}

export interface project {
  name: string;
  image: string;
  techstack: string;
  category: string;
  links: {
    visit: string;
    code: string;
    video: string;
  };
}

export interface experience {
  company: string;
  position: string;
  duration: string;
  desc: string[];
}

export interface education {
  institute: string;
  degree: string;
  duration: string;
  desc: string[];
}

export interface main {
  name: string;
  titles: string[];
  heroImage: string;
  shortDesc: string;
  techStackImages: string[];
}

export interface about {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
}

export interface social {
  icon: string;
  link: string;
}

export interface data {
  [x: string]: any;
  main: main;
  about: about;
  skills: skill[];
  projects: project[];
  experiences: experience[];
  educations: education[];
  socials: social[];
}
