import "./MobileMenu.scss";
import NavBarItem from "./NavBarItem";

const MobileMenu = (props) => {
  const { setIsMobileMenuOpen } = props;

  return (
    <div className="mobile-menu__container">
      <div
        className="mobile-menu__inner-container"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <ul>
          <li>
            <NavBarItem to="/">Home</NavBarItem>
          </li>
          <li>
            <NavBarItem to="experience">Experience</NavBarItem>
          </li>
          <li>
            <NavBarItem to="education">Education</NavBarItem>
          </li>
          <li>
            <NavBarItem to="activities">Activities</NavBarItem>
          </li>
          <li>
            <NavBarItem to="contact">Contact</NavBarItem>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
