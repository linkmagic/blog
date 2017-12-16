import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './DropDown.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// add global DropDown event listener
(function () {

  window.onclick = function hideDropdownMenu(e) {

    if (e.target.matches('DropDown__ArrowBtn')) {
      return;
    }

    var ddMenu = document.getElementsByClassName('DropDown__ArrowBtn')[0];

    if (ddMenu.classList.contains('Component-show')) {
      ddMenu.classList.toggle('Component-show');
    }

  }

}) ();

// load JSON User data
var jsonUserData = require('./user.json');
(function () {
  console.log(jsonUserData);
}) ();

// rendering
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
