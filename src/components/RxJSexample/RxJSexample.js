import React from "react";

import { messageService } from "../../services/message";
import MessagePage from "./MessagePage";

class RxJSexample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  componentDidMount() {
    // subscribe to component messages
    this.subscription = messageService.getMessage().subscribe(message => {
      if (message) {
        // add message to local state if not empty
        this.setState({ messages: [...this.state.messages, message] });
      } else {
        // clear messages when empty message received
        this.setState({ messages: [] });
      }
    });
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <MessagePage />
      </div>
    );
  }
}

export default RxJSexample;
