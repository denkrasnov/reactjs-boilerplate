import React, { Component } from "react";
import photo from "../images/denis.jpg";
import styles from "./home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.photo} src={photo} />
      </div>
    );
  }
}

export default Home;
