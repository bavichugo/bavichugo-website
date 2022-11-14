import TimelineItem from "./TimelineItem";
import "./Timeline.scss";

const Timeline = (props) => {
  let isRight = true;

  return (
    <div id="timeline">
      {props.data.map((experience, index) => {
        isRight = !isRight;
        return (
          <TimelineItem
            title={experience.title}
            content={experience.content}
            icon={experience.icon}
            isRight={isRight}
            date={experience.date}
            role={experience.role}
            key={`${experience.title}${index}`}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
