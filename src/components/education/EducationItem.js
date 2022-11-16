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
      {courses.length > 0 && (
        <div className="education-item__courses-container">
          <h2>Coursework</h2>
          <div className="education-item__courses-inner-container">
            {courses.map((course) => (
              <div className="education-item__courses-item">
                <span className="education-item__courses-item-name">
                  {course.name}
                </span>
                <div className="education-item__courses-item-image">
                  <img src={course.icon} alt={course.iconAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationItem;
