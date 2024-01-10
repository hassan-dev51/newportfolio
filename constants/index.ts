import {
  carhub,
  covid,
  css,
  docker,
  expense,
  flask,
  git,
  hackathon,
  html,
  intern,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  panaverse,
  piaic,
  pricing,
  prompt,
  python,
  react,
  redux,
  tailwind,
  typescript,
} from "@/public/images";
import { StaticImageData } from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { SiGmail } from "react-icons/si";
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
    skill: "80",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    skill: "70",
  },
  {
    imageUrl: tailwind,
    name: "CSS framework",
    type: "Frontend",
    skill: "70",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    skill: "60",
  },
  {
    imageUrl: typescript,
    name: "typeScript",
    type: "Frontend",
    skill: "60",
  },
  {
    imageUrl: python,
    name: "python",
    type: "Frontend",
    skill: "50",
  },
  {
    imageUrl: react,
    name: "reactjs",
    type: "Framework",
    skill: "60",
  },
  {
    imageUrl: nextjs,
    name: "nextjs",
    type: "Framework",
    skill: "60",
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
    skill: "50",
  },
  {
    imageUrl: nodejs,
    name: "nodejs",
    type: "runtime",
    skill: "50",
  },
  {
    imageUrl: git,
    name: "GitHub",
    type: "Version Control",
    skill: "70",
  },
  {
    imageUrl: docker,
    name: "Containerize",
    type: "Deployement",
    skill: "40",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    skill: "40",
  },
];

export const projects = [
  {
    id: 1,
    image: hackathon,
    githublink: "https://github.com/hassan-dev51/hackathon",
    description: `Explore a seamless online shopping experience with our e-commerce site, meticulously crafted for a premium brand. Powered by cutting-edge technologies, our platform is built using Next.js and Redux for optimal performance and state management. Enjoy secure transactions with integrated Stripe payment functionality`,
    url: "https://hackathon-iota.vercel.app/",
    tags: [
      {
        id: 1,
        framework: "Next JS",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "Redux JS",
        color: "tag-blue",
      },
      {
        id: 3,
        framework: "Stripe",
        color: "tag-green",
      },
    ],
  },
  {
    id: 2,
    image: prompt,
    githublink: "https://github.com/hassan-dev51/prompt",
    description: `Discover a vibrant online community on our Full Stack Application, providing a space for individuals to share their thoughts and experiences. Built with the power of Next.js, MongoDB for robust data storage, and styled with the sleek simplicity of Tailwind CSS`,
    url: "https://prompt-red.vercel.app/",
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
        framework: "MongoDB",
        color: "tag-green",
      },
    ],
  },
  {
    id: 3,
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
    id: 4,
    image: intern,
    githublink: "https://github.com/hassan-dev51/internship",
    description: `Photoshop design project, a brand's visual essence translated into a seamless website. Built with simple HTML, CSS, and JavaScript, the template offers a dynamic and responsive user experience, showcasing the brand's identity through minimalistic elegance and thoughtful interactivity`,
    url: "https://internshiptesting.netlify.app/",
    tags: [
      {
        id: 1,
        framework: "HTML",
        color: "tag-red",
      },
      {
        id: 2,
        framework: "CSS",
        color: "tag-blue",
      },
    ],
  },
  {
    id: 5,
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
    id: 6,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
export const socialLinks = [
  {
    id: 1,
    url: "https://www.instagram.com/hassan.ali7887/",
    icon: "AiFillInstagram",
    title: "Instagram",
    className: "",
  },
  {
    id: 2,
    url: "https://twitter.com/hassanalimunir",
    icon: "AiOutlineTwitter",
    title: "Twitter",
    className: "",
  },
  {
    id: 3,
    url: "https://www.facebook.com/profile.php?id=100008762237511",
    icon: "AiFillFacebook",
    title: "Facebook",
    className: "",
  },
  {
    id: 4,
    url: "mailto:hassanmunir363@gmail.com",
    icon: "SiGmail",
    title: "Gmail",
    className: "",
  },
  {
    id: 5,
    url: "https://www.linkedin.com/in/hassan-ali-464666255/",
    icon: "AiFillLinkedin",
    title: "LinkedIn",
    className: "",
  },
];

export const IconComponent: {
  [key: string]: React.FC<{ className?: string }>;
} = {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  SiGmail,
};
