import React, { Component } from 'react';
import Avatar from "./components/Avatar/Avatar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
          alt=""
          online={true}
        />
      </div>
    );
  }
}

export default App;
