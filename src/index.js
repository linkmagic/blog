import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducers';

import './index.css';
import './DropDown.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

(function () {
  window.onclick = function hideDropdownMenu(e) {

    if (e.target.matches('DropDown__ArrowBtn')) {
      return;
    }

    let ddMenu = document.getElementsByClassName('DropDown__ArrowBtn')[0];

    if (ddMenu.classList.contains('Component-show')) {
      ddMenu.classList.toggle('Component-show');
    }
  }
}) ();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
  