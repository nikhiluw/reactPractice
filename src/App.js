import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import ContentPanel from './content-panel';
import {BrowserRouter, Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <ContentPanel />
          <Footer />
        </Router>
      </div>
        
    );
  }
}

export default App;
