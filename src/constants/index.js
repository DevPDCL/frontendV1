import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  
  {
    id: "services",
    title: "OUR SERVICES",
  },
  
  {
    id: "work",
    title: "WORK",
  },
 
  {
    id: "doctors",
    title: "DOCTORS",
  },
  {
    id: "branches",
    title: "BRANCHES",
  },
  {
    id: "news",
    title: "NEWS & MEDIA",
  },
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
  
];

const services = [
  {
    title: "Call for Appointment",
    icon: mobile,
  },
  {
    title: "Find Doctor",
    icon: web,
  },
  {
    title: "Test Charge",
    icon: backend,
  },
  {
    title: "Health Packages",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Popular Diagnostic",
    company_name: "Popular Group",
    icon: starbucks,
    iconBg: "#1c1c1c",
    date: "March 2020 - April 2021",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Hospital",
    company_name: "Popular Group",
    icon: tesla,
    iconBg: "#1c1c1c",
    date: "Jan 2021 - Feb 2022",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Medical College",
    company_name: "Popular Group",
    icon: shopify,
    iconBg: "#1c1c1c",
    date: "Jan 2022 - Jan 2023",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
  {
    title: "Popular Pharmacitical",
    company_name: "Popular Group",
    icon: meta,
    iconBg: "#1c1c1c",
    date: "Jan 2023 - Present",
    points: [
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
      "We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mr. Ahmed",
    designation: "CFO",
    company: "Biman Bangladesh",
    image: "http://populardiagnostic.com/public/testimonial/1-20190319155227.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Mr. Hasan",
    designation: "COO",
    company: "Brac Bank",
    image: "http://populardiagnostic.com/public/testimonial/2-20190319153146.jpg",
  },
  
];

const projects = [
  {
    name: "AMBULANCE SERVICE",
    description:
      "Ambulance BD 24 is the best ambulance service in Dhaka, Bangladesh. We provide emergency ambulance service in Dhaka city and transport patient.",
      tags: [
        {
          name: "Incity",
          color: "blue-text-gradient",
        },
        {
          name: "Outsidecity",
          color: "green-text-gradient",
        },
        {
          name: "Abrod",
          color: "pink-text-gradient",
        },
      ],
    image: carrent,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name: "BLOOD BANK",
    description:
      "Blood Bank Management System (BBMS) under Safe Blood Transfusion Program, HSM, DGHS. Blood Transfusion Transfusion Program, HSM, DGHS.",
    tags: [
      {
        name: "Incity",
        color: "blue-text-gradient",
      },
      {
        name: "Outsidecity",
        color: "green-text-gradient",
      },
      {
        name: "Abrod",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "http://populardiagnostic.com/",
  },
  {
    name: "HEALTH PAKAGES",
    description:
      "We believe everyone should have access to convenient, affordable, and high-quality healthcare. Our health checks and packages help you stay on top of your ",
      tags: [
        {
          name: "Incity",
          color: "blue-text-gradient",
        },
        {
          name: "Outsidecity",
          color: "green-text-gradient",
        },
        {
          name: "Abrod",
          color: "pink-text-gradient",
        },
      ],
    image: tripguide,
    source_code_link: "http://populardiagnostic.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
