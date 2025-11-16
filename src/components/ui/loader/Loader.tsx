import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.plane}>
        <img
          src="https://zupimages.net/up/19/34/4820.gif"
          alt="Loading"
          className={styles.planeImg}
        />
      </div>
      <div className={styles.earthWrapper}>
        <div className={styles.earth}></div>
      </div>
    </div>
  );
};

export default Loader;
