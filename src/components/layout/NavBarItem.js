import { NavLink } from "react-router-dom";
import "./NavBarItem.scss";

const NavBarLink = (props) => {
  const { to } = props;
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "nav-bar-item__active" : "")}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
