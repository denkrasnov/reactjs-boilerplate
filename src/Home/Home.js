import React, { Component } from "react";
import photo from "../images/denis.jpg";
import styles from "./home.css";

class Home extends Component {
  static displayName = "Home";

  state = {
    isNotificationOpened: false
  }

  changeState = () => {
    this.setState({
      isNotificationOpened: !this.state.isNotificationOpened
    })
  }

  render() {
    const { isNotificationOpened } = this.state;
    const state = this.state;
    const newState = { ...state };
    return (
      <div className={styles.container}>
        <img src={photo} className={styles.photo} />
        <h1>Krasnov Denis</h1>
        <button type="button" onClick={this.changeState}>Show notification</button>
        {isNotificationOpened ? <h3><b>Frontend ReactJS</b></h3> : null}
      </div>
    );
  }
}

export default Home;