import React, { Component } from 'react';
import Avatar from "./components/Avatar/Avatar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar 
          src="https://avatars.mds.yandex.net/get-pdb/1054037/9e83b428-6426-4802-b8b2-d302f6f88485/s1200" 
          alt=""
          style={{width: 50, height: 50}}
          online={true}
        />
      </div>
    );
  }
}

export default App;
