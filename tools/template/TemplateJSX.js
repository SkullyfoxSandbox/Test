
module.exports = (name)=>{
    const component = `\
    import React, { Component, Fragment } from 'react';
    import './${name}.sass'

    class ${name} extends Component {
      constructor(props){
        super(props);
      }
      render(){
        return(
          <div>

          </div>
        );
      }
    }

    export default ${name};\
    `
    return component;
  }
