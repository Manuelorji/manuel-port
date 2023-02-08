import { useState, useEffect, useRef } from "react";

import Nav from "./components/Nav/Nav.js";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe.js";
import GetInTouch from "./components/GetInTouch/GetInTouch.jsx";
import MyProjects from "./components/MyProjects/MyProjects.js";
import ProjectsList from "./components/MyProjects/ProjectsList.jsx";

import Loader from "./components/loader/loader.jsx";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [loading, setLoading] = useState(true);

  const hamburgerMenu = useRef("");

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Get in touch", href: "#get-in-touch" },
    { title: "About me", href: "#aboutme" },
    { title: "My Projects", href: "#myprojects" },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className=" h-screen overflow-hidden text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "rgb(22,205,559)",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: -1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "polygon",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <Nav
        navLinks={navLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        hamburgerMenu={hamburgerMenu}
      />
      <Hero
        navLinks={navLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        hamburgerMenu={hamburgerMenu}
      />
      <MyProjects />
      <AboutMe />
      <GetInTouch />
      <ProjectsList />
    </main>
  );
};

export default App;
