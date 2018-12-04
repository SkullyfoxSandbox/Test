import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter , Route} from 'react-router-dom';

import Home from './pages/Home/Home.jsx';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const initialData = this.props.initialData
            ? this.props.initialData
            : window.__INITIAL_DATA__;
        return (
          <BrowserRouter>
            <div>
              <Route path="/" exact="true" component={Home} />
            </div>
          </BrowserRouter>
        );
    }
}

export default hot(module)(App);
