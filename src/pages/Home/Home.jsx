import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Home.sass';
import Logo from './Logo.png';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="HomeContainer">
        <p className="Title">Bienvenue sur FoxPlay !</p>
        <img src={Logo} alt="FoxPlay" class="Logo"/>
      </div>
    );
  }
}

export default Home;
