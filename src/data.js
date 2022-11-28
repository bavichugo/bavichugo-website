import { FaLinkedin, FaBriefcase } from "react-icons/fa";
import gtLogo from "./assets/gatech.png";
import mdcLogo from "./assets/mdc.jpeg";
import java from "./assets/java.png";
import mysql from "./assets/mysql.png";
import math from "./assets/math.png";
import c from "./assets/c.png";
import ethics from "./assets/ethics.png";
import cPlusPlus from "./assets/cplusplus.png";
import feedingSouthFlorida from "./assets/feeding-south-florida-logo.png";
import robot from "./assets/yellow-robot.png";
import youtube from "./assets/youtube-logo.jpg";
import python from "./assets/python-logo.png";
import leetcode from "./assets/leetcode-logo.png";
import teaching from "./assets/teaching.jpeg";
import communication from "./assets/communication.jpg";
import volunteer from "./assets/volunteer.png";

const SKILLS = {
  COMMUNICATION: {
    name: "Communication",
    icon: communication,
  },
  PYTHON: {
    name: "Python",
    icon: python,
  },
  JAVA: {
    name: "Java",
    icon: java,
  },
  LEETCODE: {
    name: "LeetCode",
    icon: leetcode,
  },
  TEACHING: {
    name: "Teaching",
    icon: teaching,
  },
  MATH: {
    name: "Math",
    icon: math,
  },
  C_PLUS_PLUS: {
    name: "C++",
    icon: cPlusPlus,
  },
  C: {
    name: "C",
    icon: c,
  },
  MYSQL: {
    name: "MySQL",
    icon: mysql,
  },
  ETHICS: {
    name: "Ethics",
    icon: ethics,
  },
  VOLUNTEER: {
    name: "Volunteer",
    icon: volunteer,
  },
};

/**
 * titile: string
 * date: string
 * role: string
 * content: array
 * icon: component
 */
export const experienceData = [
  {
    title: "ServiceNow (incoming)",
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
      "Working in the simplified campaign creation project which is projected to increase ad revenue millions",
    ],
    icon: <FaLinkedin />,
  },
  {
    title: "ServiceNow",
    date: "May 2022 - August 2022",
    role: "Software Engineer Intern",
    content: [
      "Developed a migration tool using JavaScript, HTML, CSS, and ServiceNow’s Front-End framework (Seismic) that assisted users to decide whether to migrate ServiceNow's latest UI version",
      "Built highly interactive web-based application UIs that can scale with application complexity",
      "Worked in an agile environment with weekly stand-up meetings and weekly 2-hour sprint planning",
    ],
    icon: <FaBriefcase />,
  },
];

/**
 * university: string
 * gpa: string
 * dates: string
 * logo: image
 * degreeType: string
 * skills: [
 *  name: string
 *  icon: image
 * ]
 */
export const educationData = [
  {
    university: "Georgia Tech",
    gpa: "4.00",
    dates: "2021 to 2024 (expected)",
    logo: gtLogo,
    degreeType: "B.S. in Computer Science",
    skills: [
      {
        name: "Introduction to Object Oriented Programming",
        icon: SKILLS.JAVA.icon,
      },
      {
        name: "Data Structures and Algorithms for Applications",
        icon: SKILLS.JAVA.icon,
      },
      {
        name: "Objects and Design",
        icon: SKILLS.JAVA.icon,
      },
      {
        name: "Introduction to Database Systems",
        icon: SKILLS.MYSQL.icon,
      },
      {
        name: "Introduction to Discrete Mathematics for Computer Science",
        icon: SKILLS.MATH.icon,
      },
      {
        name: "Computer Organization and Programming",
        icon: SKILLS.C.icon,
      },
      {
        name: "Computing, Society, and Professionalism",
        icon: SKILLS.ETHICS.icon,
      },
    ],
  },
  {
    university: "MDC Honors",
    gpa: "3.96",
    dates: "2019 to 2021",
    logo: mdcLogo,
    degreeType: "A.A. in Computer Science",
    skills: [
      {
        name: "Calculus I",
        icon: SKILLS.MATH.icon,
      },
      {
        name: "Calculus II",
        icon: SKILLS.MATH.icon,
      },
      {
        name: "Calculus III",
        icon: SKILLS.MATH.icon,
      },
      {
        name: "Intro Differential Equations",
        icon: SKILLS.MATH.icon,
      },
      {
        name: "Introduction to C++ Programming",
        icon: SKILLS.C_PLUS_PLUS.icon,
      },
      {
        name: "Java Programming",
        icon: SKILLS.JAVA.icon,
      },
    ],
  },
];

/**
 * university: string
 * position: string
 * dates: string
 * logo: image
 * skills: [
 *  name: string
 *  icon: image
 * ]
 */
export const activitiesData = [
  {
    organization: "YouTube",
    position: "Content Creator",
    dates: "2021 - 2022",
    logo: youtube,
    skills: [SKILLS.PYTHON, SKILLS.JAVA, SKILLS.LEETCODE],
  },
  {
    organization: "Robotics Club",
    position: "Vice-President",
    dates: "2020 - 2021",
    logo: robot,
    skills: [SKILLS.JAVA, SKILLS.COMMUNICATION, SKILLS.TEACHING],
  },
  {
    organization: "Feeding South Florida",
    position: "Volunteer Leader",
    dates: "2018 - 2021",
    logo: feedingSouthFlorida,
    skills: [SKILLS.COMMUNICATION, SKILLS.TEACHING, SKILLS.VOLUNTEER],
  },
];
