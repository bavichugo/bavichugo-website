import { FaLinkedin } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import gtLogo from "./assets/gatech.png";
import mdcLogo from "./assets/mdc.jpeg";

export const experienceData = [
  {
    title: "ServiceNow (upcoming)",
    date: "May 2023 - August 2023",
    role: "Software Engineer Intern",
    content: [
      "I will work on ServiceNow's Chat Bot system"
    ],
    icon: <FaBriefcase />,
  }
  ,
  {
    title: "LinkedIn",
    date: "September 2022 - December 2022",
    role: "UI Engineer Intern",
    content: [
      "Worked in the simplified campaign creation project which is projected to increase revenue by 30 million",
      "Wrote integration and acceptance testing",
      "Developed scalable code using Ember.js"
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
    courses: [],
    logo: gtLogo,
    degreeType: "B.S. in Computer Science"
  },
  {
    university: "MDC Honors",
    gpa: "3.96",
    dates: "2019 to 2021",
    courses: [],
    logo: mdcLogo,
    degreeType: "A.A. in Computer Science"
  }
]