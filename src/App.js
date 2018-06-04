import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
