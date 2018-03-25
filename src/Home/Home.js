import React from "react";
import photo from "../images/denis.jpg";
import styles from "./home.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={photo} className={styles.photo} />
      <h1>Krasnov Denis</h1>
    </div>
  );
}

export default Home;