import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// utils

(function () {

  window.onclick = function hideDropdownMenu(e) {

    if (e.target.matches('nav-panel-public-btn-ext-menu')) {
      return;
    }

    var ddMenu = document.getElementsByClassName('nav-panel-public-btn-ext-menu')[0];

    if (ddMenu.classList.contains('show-component')) {
      ddMenu.classList.toggle('show-component');
    }

  }

}) ();

// ---

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
