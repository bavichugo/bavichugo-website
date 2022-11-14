import "./TimelineItem.scss";

const TimelineItem = (props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        {props.icon}
      </div>
      <div className={`timeline-content ${props.isRight && "right"}`}>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <h4>{props.role}</h4>
        <ul className="timeline-content-list">
          {props.content.map(bullet => <li>{bullet}</li>)}
        </ul>
        <a href="#" className="btn">
          button
        </a>
      </div>
    </div>
  );
};

export default TimelineItem;
