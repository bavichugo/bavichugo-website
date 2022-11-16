import { FaLinkedin, FaBriefcase } from "react-icons/fa";
import gtLogo from "./assets/gatech.png";
import mdcLogo from "./assets/mdc.jpeg";
import javaPng from "./assets/java.png";
import mysqlPng from "./assets/mysql.png";
import mathPng from "./assets/math.png";
import cPng from "./assets/c.png";
import ethicsPng from "./assets/ethics.png";
import cPlusPlus from "./assets/cplusplus.png";

export const experienceData = [
  {
    title: "ServiceNow (upcoming)",
    date: "May 2023 - August 2023",
    role: "Software Engineer Intern",
    content: ["I will work on ServiceNow's Chat Bot system"],
    icon: <FaBriefcase />,
  },
  {
    title: "LinkedIn",
    date: "September 2022 - December 2022",
    role: "UI Engineer Intern",
    content: [
      "Worked in the simplified campaign creation project which is projected to increase revenue by 30 million",
      "Wrote integration and acceptance testing",
      "Developed scalable code using Ember.js",
    ],
    icon: <FaLinkedin />,
  },
  {
    title: "ServiceNow",
    date: "May 2022 - August 2022",
    role: "Software Engineer Intern",
    content: [],
    icon: <FaBriefcase />,
  },
];

export const educationData = [
  {
    university: "Georgia Tech",
    gpa: "4.00",
    dates: "2021 to 2024 (expected)",
    logo: gtLogo,
    degreeType: "B.S. in Computer Science",
    courses: [
      {
        number: "CS 1331",
        name: "Introduction to Object Oriented Programming",
        icon: javaPng,
        iconAlt: "Java",
      },
      {
        number: "CS 1332",
        name: "Data Structures and Algorithms for Applications",
        icon: javaPng
      },
      {
        number: "CS 2340",
        name: "Objects and Design",
        icon: javaPng
      },
      {
        number: "CS 4400",
        name: "Introduction to Database Systems",
        icon: mysqlPng
      },
      {
        number: "CS 2050",
        name: "Introduction to Discrete Mathematics for Computer Science",
        icon: mathPng
      },
      {
        number: "CS 2110",
        name: "Computer Organization and Programming",
        icon: cPng
      },
      {
        number: "CS 3001",
        name: "Computing, Society, and Professionalism",
        icon: ethicsPng
      },
    ],
  },
  {
    university: "MDC Honors",
    gpa: "3.96",
    dates: "2019 to 2021",
    logo: mdcLogo,
    degreeType: "A.A. in Computer Science",
    courses: [
      {
        number: "MAC 2311",
        name: "Calculus I",
        icon: mathPng
      },
      {
        number: "MAC 2312",
        name: "Calculus II",
        icon: mathPng
      },
      {
        number: "MAC 2313",
        name: "Calculus III",
        icon: mathPng
      },
      {
        number: "MAP 2302",
        name: "Intro Differential Equations",
        icon: mathPng
      },
      {
        number: "COP 1334",
        name: "Introduction to C++ Programming",
        icon: cPlusPlus
      },
      {
        number: "COP 2800",
        name: "Java Programming",
        icon: javaPng
      },
    ],
  },
];
