import Skills from "../skills/Skills";
import "./EducationItem.scss";

const EducationItem = (props) => {
  const { university, gpa, dates, courses, logo, degreeType } = props.item;

  return (
    <div className="education-item__container">
      <div className="education-item__inner-container">
        <div className="education-item__image-container">
          <img className="education-item__image" src={logo} alt={university} />
        </div>
        <div className="education-item__description">
          <h1>{university}</h1>
          <h2>
            <i>{degreeType}</i>
          </h2>
          <h2>{dates}</h2>
          <h3>GPA: {gpa} / 4.00</h3>
        </div>
      </div>
      { courses.length ? <Skills skills={courses} sectionName="Coursework" /> : "" }
    </div>
  );
};

export default EducationItem;
