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


// display object fields
function showFields(obj) {

  let strResult = '{\n';
  
  Object.keys(obj).forEach((key) => {
    strResult += '\t' + key + ': ' + obj[key] + '\n';
  });
  strResult += '\n}';

  return strResult;
}

function showFieldsArray(arr) {

  let strResult;
  let arrResult = [];
  
  for (let i = 0; i < arr.length; i++) {

    strResult = '{\n';

    Object.keys(arr[i]).forEach((key) => {
      strResult += '\t' + key + ': ' + arr[i][key] + '\n';
    });

    strResult += '\n}';
    arrResult.push(strResult);

  }

  strResult = arrResult.join('\n');
  
  return strResult;
}


// load JSON User data
var jsonUserData = require('./user.json');

(function () {

  console.log('UserData: ', showFields(jsonUserData));

}) ();


// load JSON Users
var jsonUsers = require('./users.json');

(function () {

  console.log(showFieldsArray(jsonUsers));
  
}) ();


// load JSON Articles
var jsonUsers = require('./articles.json');

(function () {

  console.log(showFieldsArray(jsonUsers));
  
}) ();

// rendering
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
