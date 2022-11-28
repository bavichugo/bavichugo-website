import "./TimelineItem.scss";

const TimelineItem = (props) => {
  const { icon, title, date, role, content, buttonLink } = props;
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <div className={`timeline-content ${props.isRight && "right"}`}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <h4>{role}</h4>
        <ul className="timeline-content-list">
          {content.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
        {!!buttonLink && (
          <a href="#" className="btn">
            button
          </a>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
