import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div> Coucou Monica : ) </div>
          <div>
            Edit <span className="code">src/js/App.js</span> and save to reload.
          </div>
          <div>
            Edit the style <span className="code">src/style/App.css</span> and
            save to reload.
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
