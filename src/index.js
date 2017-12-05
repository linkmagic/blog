import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './DropDown.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// utils

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

// ---

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
