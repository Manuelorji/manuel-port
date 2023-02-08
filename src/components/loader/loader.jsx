import React from "react";
import loaderGif from "../../Images/Eclipse loader.gif";
// import styles from "./loader.scss";

const loader = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <img src={loaderGif} alt="" />
    </div>
  );
};

export default loader;
