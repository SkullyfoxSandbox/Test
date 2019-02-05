import React from 'react';
import { hydrate } from 'react-dom';
import { hot } from 'react-hot-loader';
import './style/index.sass';
import App from './App.jsx';

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        hydrate(<App />, document.getElementById('app'));
    });
}