import React, { Component } from "react";
import icon from "../../images/react.gif";
import styles from "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <section>
        <img className={styles.image} src={icon} />
        <h1 className={styles.header}>RectJS boilerplate</h1>
      </section>
    );
  }
}

export default Home;
