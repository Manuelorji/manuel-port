import styles from "./Hero.module.css";
import heroImage from "../../Images/avatar.jpg";
import closeBtn from "../../Images/x.svg";

const Hero = ({ activeLink, setActiveLink, navLinks, hamburgerMenu }) => {
  const heroButtons = [
    {
      title: "GET IN TOUCH",
      href: "#get-in-touch",
    },
    {
      title: "MY PROJECTS",
      href: "#myprojects",
    },
  ];

  const hideNavLinks = () => {
    hamburgerMenu.current.style.display = "none";
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className="text-3xl font-bold ">
          I'm Orji Emmanuel <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Front-end Developer.
          </span>
        </h1>

        <p className="text-medium">
          Have you ever wondered what the word 'Dynamism' means?
        </p>
        <p className="text-medium">
          It's imperative to always learn and discover new things everyday to
          <br />
          keep one's passion fresh and progressive.
        </p>

        <p className="text-medium">
          <span className="mr-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-50">
            Join
          </span>
          the movement in making the world a better place as we make
          <br />
          positive impact in Tech
          <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-50">
            now.
          </span>
        </p>
        <div className={styles.btns}>
          {heroButtons.map((herobutton, i) => (
            <a key={i} href={herobutton.href}>
              <button onClick={() => setActiveLink(herobutton.href)}>
                {herobutton.title}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="w-58 select-none ">
        <img className={styles.heroImg} src={heroImage} alt="" />
      </div>
      <div ref={hamburgerMenu} className={styles.hamburgerMenu}>
        <div className="absolute top-0 left-0 right-0 bg-black px-2 py-4">
          <img
            className={styles.closeBtn}
            src={closeBtn}
            alt=""
            onClick={hideNavLinks}
          />
        </div>
        <div className="py-14 flex flex-col items-center w-full justify-evenly h-3/5">
          {navLinks.map((navLink, i) => (
            <div
              onClick={() => setActiveLink(navLink.href)}
              className={` ${
                activeLink === navLink.href &&
                "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-50"
              }`}
              key={i}
            >
              <a
                className={styles.navLink}
                onClick={hideNavLinks}
                href={navLink.href}
              >
                {navLink.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
