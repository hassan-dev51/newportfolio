import {
  css,
  docker,
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
];
