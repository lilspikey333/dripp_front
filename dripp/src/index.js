import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    // what component do you want to mount? 
    <Router>
        <App />
    </Router>
    ,
    // where do you want to moun it? 
    document.getElementById("root")
);
