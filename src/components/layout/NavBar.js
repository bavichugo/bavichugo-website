import { NavLink } from "react-router-dom";
import { useState } from "react";
import MainCenteredLayout from "./MainCenteredLayout";
import "./NavBar.scss";

const NavBar = () => {
  const [highlighted, setHighlighted] = useState();

  return (
    <nav className="nav-bar__main-container">
      <MainCenteredLayout className="nav-bar__main-centered-container nav-bar__link-style">
        <NavLink to="/" className="nav-bar__my-name">Victor Hugo Batistela</NavLink>
        <ul className="nav-bar__main-inner-container">
          <NavLink to="experience" activeClassName="active">Experience</NavLink>
          <NavLink to="education" activeClassName="active">Education</NavLink>
          <NavLink to="activities" activeClassName="active">Activities</NavLink>
          <NavLink to="projects" activeClassName="active">Projects</NavLink>
          <NavLink to="contact" activeClassName="active">Contact</NavLink>
        </ul>
      </MainCenteredLayout>
    </nav>
  );
};

export default NavBar;
