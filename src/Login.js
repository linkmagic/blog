import React, { Component } from 'react';
import './Login.css';
import DropDown from './DropDown';
import './DropDown.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userName } = this.props;

    return (
      <div className="Login">

        <p className="Login__Title">{ userName }</p>
        <img className="Login__Avatar" src="img/user.png" alt="user"/>

        <DropDown>
          <p><button className="DropDown__MenuItem">Выход</button></p>
          <p><button className="DropDown__MenuItem">Настройки</button></p>
        </DropDown>

      </div>
    );
  }
}