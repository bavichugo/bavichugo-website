import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import MainCenteredLayout from "./MainCenteredLayout";
import "./NavBar.scss";

const NavBar = () => {
  const [highlighted, setHighlighted] = useState();

  return (
    <nav className="nav-bar__main-container">
      <MainCenteredLayout className="nav-bar__main-centered-container nav-bar__link-style">
        <Link
          to="/"
          className="nav-bar__my-name"
        >
          Victor Hugo Batistela
        </Link>
        <ul className="nav-bar__main-inner-container">
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="education">Education</NavLink>
          <NavLink to="activities">Activities</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </ul>
      </MainCenteredLayout>
    </nav>
  );
};

export default NavBar;
