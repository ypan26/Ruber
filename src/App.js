import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './data';
import './App.css';
import Header from './components/Header';
import Bookride from './components/Bookride';
import Ridestat from './components/Ridestat';

class App extends Component {

  state = {           
    custData: Data
  }

  render() {

    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="bookride">
          <Bookride />
        </div>
        <div className="custdata">
          <Ridestat custdata={this.state.custData} />
        </div> 
      </div>
    );
  }
}

export default App;
