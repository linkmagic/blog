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

/*function ie11Detection() {
  let userAgent = window.navigator.userAgent;
  let trident = userAgent.indexOf('Trident/');
  if (trident > 0) {
    let rv = userAgent.indexOf('rv:');
    let ieVersion = parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10);
    return (ieVersion === 11);
  }
}

(function () {
  window.onclick = function hideDropdownMenu(e) {

    if (ie11Detection()) {
      // IE 11
    } else {
      if (e.target.matches('DropDown__ArrowBtn')) {
        return;
      }
      let ddMenu = document.getElementsByClassName('DropDown__ArrowBtn')[0];

      if (ddMenu.classList.contains('Component-show')) {
        ddMenu.classList.toggle('Component-show');
      }
    }

  }
}) ();*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
