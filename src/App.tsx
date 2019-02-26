import React, { Component } from 'react';
import Avatar from "./components/Avatar/Avatar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar 
          src="" 
          capSrc=""
          alt=""
          style={{width: 50, height: 50}}
          online={true}
        />
      </div>
    );
  }
}

export default App;
