    import React, { Component, Fragment } from 'react';
    import './Layout.sass'

    class Layout extends Component {
      constructor(props){
        super(props);
      }
      render(){
        return(
          <div className="AppContainer">
            {this.props.children}
            <div className="nav">
              <ul>
                <li>
                  <i className="fas fa-home"></i>
                </li>
                <li>
                  <i className="far fa-chart-bar"></i>
                </li>
                <li>
                  <i className="fab fa-discord"></i>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    }

    export default Layout;    