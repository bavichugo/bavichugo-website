import "./Skills.scss";

const Skills = (props) => {
  const { sectionName, skills } = props;
  return (
    <div className="skills__container">
      <h2>{sectionName}</h2>
      <div className="skills__inner-container">
        {skills.map((skill) => (
          <div className="skills__item">
            <span className="skills__item-name">
              {skill.name}
            </span>
            <div className="skills__item-image">
              <img src={skill.icon} alt={skill.iconAlt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
