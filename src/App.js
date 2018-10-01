import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import ContentPanel from './content-panel';
import Matrics from './matrics';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Home from './home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={ContentPanel}/>
            <Route path="/matrics" component={Matrics} />
            
          </Switch>
          <Footer />
        </div>
      </Router>  
    );
  }
}

export default App;
