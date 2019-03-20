import React, { Component } from "react";

import icon from "../../images/react.gif";

import Hooks from "./Hooks";
import styles from "./Home.css";

class Home extends Component {
  state = { classCount: 0 };

  render() {
    return (
      <>
        <section>
          <img className={styles.image} src={icon} />
          <h1 className={styles.header}>RectJS boilerplate</h1>
          <p>You clicked {this.state.classCount} times</p>
          <button
            onClick={() =>
              this.setState({ classCount: this.state.classCount + 1 })
            }
          >
            Click me
          </button>
        </section>
        <Hooks />
      </>
    );
  }
}

export default Home;
