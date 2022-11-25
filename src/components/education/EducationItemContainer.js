import "./EducationItemContainer.scss";
import EducationItem from "./EducationItem";

const EducationItemContainer = (props) => {
  const { data } = props;

  return (
    <div className="education-item-container">
      {data.map((item) => (
        <EducationItem item={item} />
      ))}
    </div>
  );
};

export default EducationItemContainer;