import "./TimelineItem.scss";
import { FaBriefcase } from "react-icons/fa";

const TimelineItem = (props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <FaBriefcase />
      </div>
      <div className={`timeline-content ${props.isRight && "right"}`}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <a href="#" className="btn">
          button
        </a>
      </div>
    </div>
  );
};

export default TimelineItem;
