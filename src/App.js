import React, { Component } from "react";
import '../src/components/css/style.css'
import Header from '../src/components/Header'



class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />

        <div style={{"margin-top":"200px"}}>
          <h1>This can be whatever page or Component you want</h1>
          <h4>Demo Paragarph content</h4>
        </div>
      </div>
    );
  }
}

export default App;
