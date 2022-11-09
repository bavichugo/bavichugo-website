import "./MainCenteredLayout.scss";

const MainCenteredLayout = (props) => {
    const { className } = props;
    return <div className={`main-centered-layout__container ${className}`}>{props.children}</div>
}

export default MainCenteredLayout;