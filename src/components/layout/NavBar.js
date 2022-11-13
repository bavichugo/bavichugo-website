import { Link } from "react-router-dom";
import MainCenteredLayout from "./MainCenteredLayout";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./NavBar.scss";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav className="nav-bar__main-container">
      <MainCenteredLayout className="nav-bar__main-centered-container nav-bar__link-style">
        <Link to="/" className="nav-bar__my-name">
          Victor Hugo Batistela 👨‍💻
        </Link>
        <ul className="nav-bar__main-inner-container">
          <NavBarItem to="experience">Experience</NavBarItem>
          <NavBarItem to="education" >Education</NavBarItem>
          <NavBarItem to="activities">Activities</NavBarItem>
          <NavBarItem to="contact">Contact</NavBarItem>
        </ul>
        <button className="nav-bar__burger-menu">
          <IconContext.Provider value={{ color: "white" }}>
            <FaBars />
          </IconContext.Provider>
        </button>
      </MainCenteredLayout>
    </nav>
  );
};

export default NavBar;
