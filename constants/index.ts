import {
  carhub,
  covid,
  css,
  docker,
  expense,
  flask,
  git,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  panaverse,
  piaic,
  pricing,
  python,
  react,
  redux,
  tailwind,
  typescript,
} from "@/public/images";
import { StaticImageData } from "next/image";
export interface skillTypes {
  imageUrl: StaticImageData;
  name: string;
  type: string;
  skill: string;
}
export interface projectTypes {
  id: number;
  image: StaticImageData;
  githublink: string;
  description: string;
  url: string;
  tags: {
    id: number;
    framework: string;
    color: string;
  }[];
}
export type tags = { id: number; color: string; framework: string };

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: tailwind,
    name: "CSS framework",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: typescript,
    name: "typeScript",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: python,
    name: "python",
    type: "Frontend",
    skill: "30",
  },
  {
    imageUrl: react,
    name: "reactjs",
    type: "Framework",
    skill: "30",
  },
  {
    imageUrl: nextjs,
    name: "nextjs",
    type: "Framework",
    skill: "30",
  },
  {
    imageUrl: flask,
    name: "flask",
    type: "Framework",
    skill: "30",
  },
  {
    imageUrl: redux,
    name: "reduxjs",
    type: "statemanagement",
    skill: "30",
  },
  {
    imageUrl: nodejs,
    name: "nodejs",
    type: "runtime",
    skill: "30",
  },
  {
    imageUrl: git,
    name: "GitHub",
    type: "Version Control",
    skill: "30",
  },
  {
    imageUrl: docker,
    name: "Containerize",
    type: "Deployement",
    skill: "30",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    skill: "30",
  },
];

export const projects = [
  {
    id: 1,
    image: panaverse,
    githublink:
      "https://github.com/hassan-dev51/Assignment01_Nextjs_TodoApp/tree/main/panaverse",
    description: `The Panaverse DAO website, an immersive platform encapsulating a wealth of detailed documentation. Crafted using Next.js 13 and the Chakra UI component library, this landing page seamlessly integrates cutting-edge technologies for a dynamic and user-friendly experience.`,
    url: "https://panaverse-lite.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
    ],
  },
  {
    id: 2,
    image: piaic,
    githublink: "https://github.com/hassan-dev51/piaic",
    description: `The PIAIC landing page, enriched with dynamic visual elements, is a testament to my design prowess and coding proficiency. Crafted using the Framer Motion library, the page seamlessly integrates captivating animations and transitions, enhancing the overall user experience.`,
    url: "https://piaic-lite.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "FramerMotion",
        color: "tag-green",
      },
    ],
  },
  {
    id: 3,
    image: pricing,
    githublink:
      "https://github.com/hassan-dev51/Assignment01_Nextjs_TodoApp/tree/main/pricing",
    description: `Elevate your design prowess with a Figma project seamlessly implemented using Next.js and Chakra UI. This endeavor encapsulates a harmonious fusion of creativity and functionality, showcasing my ability to craft visually appealing and responsive interfaces.`,
    url: "https://pricing-ui-assignment.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "FramerMotion",
        color: "tag-green",
      },
    ],
  },
  {
    id: 4,
    image: expense,
    githublink:
      "https://github.com/hassan-dev51/Q2-Projects/tree/main/expense_app",
    description: `Effortlessly manage daily transactions with my Next.js application designed for seamless expense tracking. Utilizing the power of Chart.js and Redux, this platform ensures a user-friendly experience, allowing you to stay organized and informed about your financial activities. Experience the convenience of daily expense tracking, tailored for practical and efficient use in your everyday life.`,
    url: "https://expense-lite.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "Redux",
        color: "tag-green",
      },
    ],
  },
  {
    id: 5,
    image: covid,
    githublink: "https://github.com/hassan-dev51/covid-19",
    description: `Stay informed about the current global coronavirus situation with this application, providing real-time updates on COVID-19 cases worldwide. This intuitive platform adheres to the principle of delivering accurate and up-to-date information, enabling users to stay vigilant and aware of the ongoing pandemic.`,
    url: "https://covid-19-lite.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "ChartJs",
        color: "tag-green",
      },
    ],
  },
  {
    id: 6,
    image: carhub,
    githublink: "https://github.com/hassan-dev51/covid-19",
    description: `Stay informed about the current global coronavirus situation with this application, providing real-time updates on COVID-19 cases worldwide. This intuitive platform adheres to the principle of delivering accurate and up-to-date information, enabling users to stay vigilant and aware of the ongoing pandemic.`,
    url: "https://carhub-lake.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Tailwind",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "ChartJs",
        color: "tag-green",
      },
    ],
  },
];
