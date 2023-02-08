import React from "react";
import { v4 } from "uuid";

import LightDarkImg from "../../Images/ProjectImages/LightNDarkMode.png";
import InfiniteScroll from "../../Images/ProjectImages/infinite scroll image.png";
import Todo from "../../Images/ProjectImages/Todo List.png";
import Calculator from "../../Images/ProjectImages/calculator.png";
import BackgroundGen from "../../Images/ProjectImages/BackgroundGen.png";
import BookKeeper from "../../Images/ProjectImages/BookKeeper.png";
import FormValidator from "../../Images/ProjectImages/Form Validator.png";
import CustomTimer from "../../Images/ProjectImages/custom countdown timer.png";
import jokeTeller from "../../Images/ProjectImages/joke teller.png";
import DragNDrop from "../../Images/ProjectImages/dnd.png";
// import FetchApiSandBox from "../../Images/ProjectImages/fetch Api sandbox.png";
import yummyPizImg from "../../Images/ProjectImages/yummypiz.png";
import musicPlayer from "../../Images/ProjectImages/music player.png";
// import pictureInPicture from "../../Images/ProjectImages/picture in picture";
import videoPlayer from "../../Images/ProjectImages/video player.png";
import logisticsLandingPage from "../../Images/ProjectImages/website dev from figma.png";
import quoteGen from "../../Images/ProjectImages/quote gen.png";
import roboApp from "../../Images/ProjectImages/roboapp.png";

import styles from "./ProjectList.module.scss";

const projects = [
  {
    img: LightDarkImg,
    title: "Light and Dark Mode",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/light-and-dark-mode-project/",
  },
  {
    img: InfiniteScroll,
    title: "Infinite Scroll",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/infinite-scroll-project/",
  },
  {
    img: musicPlayer,
    title: "Music player",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/Music-player/",
  },
  {
    img: logisticsLandingPage,
    title: "Logistics Landing Page",
    category: "React.js",
    id: v4(),
    href: "https://z-logistics.netlify.app/",
  },
  {
    img: roboApp,
    title: "RoboApp",
    category: "React.js",
    id: v4(),
    href: "https://robooapp.netlify.app/",
  },
  {
    img: videoPlayer,
    title: "Video player",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuel-video-player.netlify.app/",
  },
  {
    img: quoteGen,
    title: "Quote Generator",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/quotes-gen/",
  },
  {
    img: Todo,
    title: "Todo List",
    category: "React.js",
    id: v4(),
    href: "https://manuel-todo-react.netlify.app/",
  },
  {
    img: jokeTeller,
    title: "Joke Teller",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/Joke-Teller-Project/",
  },
  {
    img: DragNDrop,
    title: "Drag & Drop",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/drag-n-drop-vanilla-js/",
  },
  {
    img: CustomTimer,
    title: "Custom Timer",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/Custom-countdown-project/",
  },
  {
    img: Calculator,
    title: "Calculator",
    category: "React.js",
    id: v4(),
    href: "https://manuelorji-calc.netlify.app/",
  },

  {
    img: BookKeeper,
    title: "Book Keeper",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/Book-keeper-Project/",
  },
  {
    img: FormValidator,
    title: "Form Validator",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/Form-validator-Project/",
  },
  {
    img: BackgroundGen,
    title: "Background Generator",
    category: "Vanilla JavaScript",
    id: v4(),
    href: "https://manuelorji.github.io/background-generator/",
  },
  {
    img: yummyPizImg,
    title: "YummyPiz",
    category: "Next.js",
    id: v4(),
    href: "https://yummyPiz.vercel.app",
  },
];

const vanillaJs = projects.filter(
  (project) => project.category === "Vanilla JavaScript"
);

const reactJs = projects.filter((project) => project.category === "React.js");

const nextJs = projects.filter((project) => project.category === "Next.js");

const ProjectsList = () => {
  return (
    <section className={styles.projectList}>
      <div id="javaScript" className={styles.jsProj}>
        {vanillaJs.map((vanjs) => (
          <a
            className={styles.jsProjCard}
            key={vanjs.id}
            href={vanjs.href}
            target="_blank"
            rel="noreferrer"
            title={vanjs.title}
          >
            <img className="h-3/4" src={vanjs.img} alt="" width={150} />
            <span className={styles.projectTitle}>{vanjs.title}</span>
          </a>
        ))}
      </div>
      <div id="reactJs" className={styles.rxProj}>
        {reactJs.map((rxjs) => (
          <a
            className={styles.rxProjCard}
            key={rxjs.id}
            href={rxjs.href}
            target="_blank"
            rel="noreferrer"
            title={rxjs.title}
          >
            <img className="h-3/4" src={rxjs.img} alt="" width={150} />
            <span className={styles.projectTitle}>{rxjs.title}</span>
          </a>
        ))}
      </div>
      <div id="nextJs" className={styles.nxtProj}>
        {nextJs.map((nxtjs) => (
          <a
            className={styles.nxtProjCard}
            key={nxtjs.id}
            href={nxtjs.href}
            target="_blank"
            rel="noreferrer"
            title={nxtjs.title}
          >
            <img className="h-3/4" src={nxtjs.img} alt="" width={150} />
            <span className={styles.projectTitle}>{nxtjs.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
