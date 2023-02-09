import html5 from "../../Images/icons8-html-5.svg";
import css3 from "../../Images/icons8-css3.svg";
import tailwindcss from "../../Images/tailwind-css.svg";
import nextjs from "../../Images/next-js.svg";
import reactjs from "../../Images/react.svg";
import git from "../../Images/git.svg";
import javaScript from "../../Images/javascript.svg";
import scss from "../../Images/scss.svg";
import aos from "../../Images/aos.png";
import nodeJs from "../../Images/nodejs.svg";
import mongoDb from "../../Images/mongodb.svg";
import postgresql from "../../Images/postgresql.png";

import framerMotion from "../../Images/framer motion.png";
import corel from "../../Images/corel.svg";
import styles from "./AboutMe.module.scss";

const technologies = [
  {
    img: html5,
    title: "Html 5",
  },
  {
    img: css3,
    title: "Css 3",
  },
  {
    img: tailwindcss,
    title: "TailwindCss",
  },
  {
    img: scss,
    title: "Scss",
  },
  {
    img: aos,
    title: "Animate on scroll",
  },
  {
    img: javaScript,
    title: "JavaScript",
  },
  {
    img: reactjs,
    title: "React.js",
  },
  {
    img: nodeJs,
    title: "Node.js",
  },
  {
    img: postgresql,
    title: "Postgresql",
  },
  {
    img: mongoDb,
    title: "MongoDb",
  },
  {
    img: git,
    title: "Git",
  },
  {
    img: nextjs,
    title: "Next.js",
  },
  {
    img: framerMotion,
    title: "Framer Motion",
  },
  {
    img: corel,
    title: "corel",
  },
];

const AboutMe = () => {
  return (
    <section id="aboutme" className={styles.aboutMe}>
      <h1 className="text-blue-200 font-semibold">Tech Personality:</h1>
      <p>
        I'm passionate about Technology and I love creating amazing websites/web
        Apps with good and wonderful User Experience. I have a dynamic and
        progressive personality, I'm open to learning as much as practically
        possible to increase my skill level and I'm forever open to work with
        good Team of developers all over the world in order to make a positive
        impact on the world.
      </p>
      <br />
      <h1 className="text-blue-200 font-semibold">Hobbies:</h1>
      <p>
        Aside from writing codes, I also enjoy graphic designing, I'm a football
        lover and I just don't watch it, I play it. Before I forget I love music
        and just like football I listen, I sing and I play Piano too.
      </p>
      <br />
      <h1 className="text-blue-200 font-semibold">Interests:</h1>
      <p>
        I have interest in Technology, Music, Sports and a little in politics.
      </p>
      <br />
      <h1 className="text-blue-200 font-semibold">Soft Skills:</h1>
      <p>
        I'm organized, creative, reliable, motivated, professional, a fast
        learner, a team player, a time manager, a problem solver and goal
        oriented.
      </p>
      <br />
      <h1 className="text-blue-200 font-semibold">Technologies I use:</h1>
      <div className="flex gap-2 flex-wrap">
        {technologies.map((technology, i) => (
          <div
            className="flex flex-col justify-between items-center cursor-pointer  transition-all ease-in-out duration-500 hover:scale-110 "
            key={i}
          >
            <img
              src={technology.img}
              alt=""
              title={technology.title}
              className={styles.techSkillsImg}
            />
            <span className={styles.techSkillsTitle}>{technology.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
