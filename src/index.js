import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from './App';

import './index.css';
import './DropDown.css';


// const initialState = {
//   'CONTENT_DISPLAY': 'PUBLICATIONS'
// };

// function uiAction(state = initialState, action) {
//   if (action.type === 'CONTENT_DISPLAY') {
//     return {
//       state,
//       'CONTENT_DISPLAY': action.value
//     };
//   }
//   return state;
// }

// const store = createStore(
//     uiAction,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe( () => {
//   console.log('subscribe', store.getState());
// });


/*
PUBLICATIONS
USERS
SEARCH
PROFILE
*/

// store.dispatch( { type: 'CONTENT_DISPLAY', value: 'PROFILE' } );



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

// ReactDOM.render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  