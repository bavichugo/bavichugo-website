import Skills from "./skills/Skills";
import "./EducationItem.scss";

const EducationItem = (props) => {
  const {
    university,
    gpa,
    dates,
    skills,
    logo,
    degreeType,
    position,
    organization,
  } = props.item;

  return (
    <div className="education-item__container">
      <div className="education-item__inner-container">
        <div className="education-item__image-container">
          <img className="education-item__image" src={logo} alt={university} />
        </div>
        <div className="education-item__description">
          {university && <h1>{university}</h1>}
          {position && <h1>{position}</h1>}
          {degreeType && (
            <h2>
              <i>{degreeType}</i>
            </h2>
          )}
          {organization && (
            <h2 className="education-item__description-position">{organization}</h2>
          )}
          <h2>{dates}</h2>
          {gpa && <h3>GPA: {gpa} / 4.00</h3>}
        </div>
      </div>
      {skills?.length ? (
        <Skills skills={skills} sectionName={university ? "Coursework" : "Skills"} />
      ) : (
        ""
      )}
    </div>
  );
};

export default EducationItem;
