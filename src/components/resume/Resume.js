import "./Resume.scss";
import Timeline from "../timeline/Timeline";
import { experienceData, educationData, activitiesData } from "../../data";
import EducationItemContainer from "../education/EducationItemContainer";

const Resume = () => {
  return (
    <div className="resume__container">
      <h1 className="resume__title">Experience</h1>
      <Timeline data={experienceData} />
      <h1 className="resume__title">Education</h1>
      <EducationItemContainer data={educationData} />
      <h1 className="resume__title">Activities</h1>
      <EducationItemContainer data={activitiesData} />
    </div>
  );
};

export default Resume;
