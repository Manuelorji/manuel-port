import React, { useRef } from "react";
import github from "../../Images/github.png";
import gmail from "../../Images/gmail.png";
import twitter from "../../Images/twitter.svg";
import linkedIn from "../../Images/linkedin.png";
import facebook from "../../Images/facebookLogo.png";
import resume from "../../Images/resume.png";
import bgImg from "../../Images/hackerImg.jpg";
import styles from "./GetInTouch.module.scss";

const contacts = [
  { img: github, title: "Github", href: "https://github.com/Manuelorji" },
  { img: gmail, title: "Gmail", href: "mailto:nuelorji@gmail.com" },
  {
    img: facebook,
    title: "Facebook",
    href: "https://facebook.com/manuel.manuelorji",
  },
  { img: twitter, title: "Twitter", href: "https://twitter.com/Manuelmendel" },
  {
    img: linkedIn,
    title: " LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-orji-497365212/",
  },
  {
    img: resume,
    title: " My Resume",
    href: "https://docs.google.com/document/d/1pZLY5RGeWPJ62QVVB8JAlf0obmXRm1K6/edit?usp=sharing&ouid=109263444424891882626&rtpof=true&sd=true",
  },
];

const GetInTouch = () => {
  const mediaContacts = useRef();

  const toggleMediaContacts = () => {
    mediaContacts.current.classList.toggle("hidden");
  };

  return (
    <section id="get-in-touch" className={styles.getInTouch}>
      <div className="relative">
        <img className={styles.contactsBg} src={bgImg} alt="" />
        <img
          onClick={toggleMediaContacts}
          className={styles.contactsBgSm}
          src={bgImg}
          alt=""
          title="Tap to view contacts"
        />
      </div>
      <p className="text-center w-2/3">
        I believe reaching out to me through any of my contacts is a movement in
        the right direction to knowing me properly & to also work and share
        ideas together. Lest I forget, I'm available for work.{" "}
        <span className="mr-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-50">
          Tap the blinking image
        </span>
        to view my resume & contacts.
      </p>
      <div
        ref={mediaContacts}
        className={`container w-fit hidden absolute top-40 right-10 py-10 flex flex-col gap-8   `}
      >
        {contacts.map((contact, i) => (
          <a
            className="cursor-pointer  transition-all ease-in-out duration-500 hover:scale-125"
            key={i}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={contact.img}
              alt=""
              title={contact.title}
              className={styles.contactsImg}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
