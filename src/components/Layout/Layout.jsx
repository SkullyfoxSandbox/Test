    import React, { Component, Fragment } from 'react';
    import './Layout.sass'

    class Layout extends Component {
      constructor(props){
        super(props);
      }
      render(){
        return(
          <div className="AppContainer">

            <div className="nav">

              <p>test</p>
            </div>

            {this.props.children}
          </div>
        );
      }
    }

    export default Layout;    