import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import ContentPanel from './content-panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentPanel />
        <Footer />
      </div>
        
    );
  }
}

export default App;
