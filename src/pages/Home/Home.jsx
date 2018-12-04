import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1> <Link to="/test"> Home Work ! </Link> </h1>
      </div>
    );
  }
}

export default Home;
