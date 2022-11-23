import EducationItem from "../components/education/EducationItem";
import { educationData } from "../data";

const Education = () => {
  return (
    <div className="education__container">
      {educationData.map((item) => (
        <EducationItem item={item} />
      ))}
    </div>
  );
};

export default Education;
