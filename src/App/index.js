import React, {Component} from 'react'
import './App.css';
import Welcome from './WelcomeMessage';
import styled, {css} from 'styled-components';




class App extends Component  {
  render(){
    return (
      <div>
        <Welcome name="cryptodash"/>
      </div>
    );
  }
}

export default App;
