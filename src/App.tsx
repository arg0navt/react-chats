import React, { Component } from "react";
import Avatar from "./components/Avatar/Avatar";
import Message from "./components/Message/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt=""
          online={true}
        />
        <Message
          message={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          date={"14:35 22.02.2019"}
        />
      </div>
    );
  }
}

export default App;
