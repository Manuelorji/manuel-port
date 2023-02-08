import styles from "./Nav.module.css";
import openBtn from "../../Images/hamburger.svg";

const Nav = ({ activeLink, setActiveLink, navLinks, hamburgerMenu }) => {
  const showNavLinks = () => {
    hamburgerMenu.current.style.display = "flex";
  };

  return (
    <nav>
      <div className={styles.logo}>Manuelfolio</div>
      <div className={styles.navlinks}>
        {navLinks.map((navLink, i) => (
          <div
            onClick={() => setActiveLink(navLink.href)}
            className={` font-semibold transition-all ease-in-out duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-blue-50 cursor-pointer ${
              activeLink === navLink.href &&
              "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-50"
            }`}
            key={i}
          >
            <a href={navLink.href}>{navLink.title}</a>
          </div>
        ))}
      </div>
      <img
        className={styles.openBtn}
        src={openBtn}
        alt=""
        onClick={showNavLinks}
      />
    </nav>
  );
};

export default Nav;
