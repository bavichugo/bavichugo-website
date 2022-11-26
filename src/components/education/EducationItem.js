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

  const title = university || position;
  const subtitle = degreeType || organization;
  const gpaInfo = `GPA: ${gpa} / 4.00`;

  return (
    <div className="education-item__container">
      <div className="education-item__inner-container">
        <div className="education-item__image-container">
          <img className="education-item__image" src={logo} alt={university} />
        </div>
        <div className="education-item__description">
          <h1>{title}</h1>
          <h2
            className={organization && "education-item__description-position"}
          >
            {subtitle}
          </h2>
          <h2>{dates}</h2>
          {gpa && <h3>{gpaInfo}</h3>}
        </div>
      </div>
      {!!skills?.length && (
        <Skills
          skills={skills}
          sectionName={university ? "Coursework" : "Skills"}
        />
      )}
    </div>
  );
};

export default EducationItem;
