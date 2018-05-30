import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Content/>
      </div>
    );
  }
}

export default App;
