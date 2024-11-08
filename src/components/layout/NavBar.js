import { Link } from "react-router-dom";
import MainCenteredLayout from "./MainCenteredLayout";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./NavBar.scss";
import NavBarItem from "./NavBarItem";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import memojiComputer from "../../assets/memoji-computer.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-bar__main-container">
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
      <MainCenteredLayout className="nav-bar__main-centered-container nav-bar__link-style">
          <Link to="/" className="nav-bar__my-name">
            Victor Hugo Batistela <img src={memojiComputer} alt="victor emoji on computer" />
          </Link>
        <ul className="nav-bar__main-inner-container">
          <NavBarItem to="resume">Resume</NavBarItem>
          <NavBarItem to="contact">Contact</NavBarItem>
        </ul>
        <button
          className="nav-bar__burger-menu"
          onClick={() => setIsMobileMenuOpen(true)}
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
