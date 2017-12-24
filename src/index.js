import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import './index.css';
import './DropDown.css';


const initialState = [
  'Smells like spirit',
  'Wind of change'
];

function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

store.subscribe( () => {
  console.log('subscribe', store.getState());
});

// store.dispatch( { type: 'ADD_TRACK', payload: 'Smells like spirit' } );
// store.dispatch( { type: 'ADD_TRACK', payload: 'Wind of change' } );


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
    <App />
  </Provider>,
  document.getElementById('root')
);
