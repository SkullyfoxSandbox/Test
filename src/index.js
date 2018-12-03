import React from 'react';
import { hydrate } from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './components/App.jsx';
import './style/index.sass';

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        hydrate(<App />, document.getElementById('app'));
    });
}
