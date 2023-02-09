import React from "react";
import loaderGif from "../../Images/Eclipse loader.gif";
import styles from "./loader.module.scss";

const loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loaderGif} alt="" />
    </div>
  );
};

export default loader;
