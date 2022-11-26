import "./Footer.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const icons = [
    { link: "https://github.com/bavichugo", component: <FaGithub /> },
    {
      link: "https://www.linkedin.com/in/vhbatistela/",
      component: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/victorbatistela/",
      component: <FaInstagram />,
    },
  ];

  return (
    <footer className="footer__container">
      <div className="footer__icons">
        <ul>
          {icons.map((icon) => (
            <li>
              <IconContext.Provider
                value={{ className: "footer__icon" }}
              >
                <a href={icon.link} target="_blank">
                  {icon.component}
                </a>
              </IconContext.Provider>
            </li>
          ))}
        </ul>
      </div>
      <p>Copyright © 2022 Victor Hugo Batistela</p>
    </footer>
  );
};

export default Footer;
