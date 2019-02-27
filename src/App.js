import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "HI";
    const dom = <h1>{greeting}</h1>

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("Hi!")}} />
        </React.Fragment>
    );
  }
}

export default App;
