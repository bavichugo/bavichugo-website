import { NavLink, Link } from "react-router-dom";
import MainCenteredLayout from "./MainCenteredLayout";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar__main-container">
      <MainCenteredLayout className="nav-bar__main-centered-container nav-bar__link-style">
        <Link to="/" className="nav-bar__my-name">
          Victor Hugo Batistela
        </Link>
        <ul className="nav-bar__main-inner-container">
          <li>
            <NavLink to="experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="education">Education</NavLink>
          </li>
          <li>
            <NavLink to="activities">Activities</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <button
          className="nav-bar__burger-menu"
          onClick={() => console.log("this was clicked")}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <FaBars />
          </IconContext.Provider> 
        </button>
      </MainCenteredLayout>
    </nav>
  );
};

export default NavBar;
