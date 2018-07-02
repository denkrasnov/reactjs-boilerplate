import React, { Component } from "react";
import photo from "../images/denis.jpg";
import styles from "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <section className={styles.container}>
        <img className={styles.photo} src={photo} />
        <h1>RectJS boilerplate</h1>
      </section>
    );
  }
}

export default Home;
