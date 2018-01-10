import React, { Component } from 'react';

import './UserTable.css';

export default class UserTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users
    };
  }

  applyFilter = (pattern, users) => {
    let userList = [];
    let user;

    for (let index = 0; index < users.length; index++) {
      user = users[index];
      if (user.name.indexOf(pattern) >= 0
        || user.surname.indexOf(pattern) >= 0
        || user.birthdate.indexOf(pattern) >= 0
        || user.regdate.indexOf(pattern) >= 0
        || user.nickname.indexOf(pattern) >= 0
        || user.email.indexOf(pattern) >= 0
        || user.rating.indexOf(pattern) >= 0)
      {
        userList.push(user);
      }
    }

    return userList;
  };

  searchInputOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.searchButtonImageOnClick();
    }
  };

  searchButtonImageOnClick = () => {
    if (this.searchInputText.value.length <= 0) {
      this.setState({
        users: this.props.users
      });
    } else {
      this.setState({
        users: this.applyFilter(this.searchInputText.value, this.props.users)
      });
    }
  };

  render() {
    const { users } = this.state;

    return (
      <div className="UserShort">
        <div className="UserShort__Search">
          <label className="UserShort__SearchInputLabel">Search:</label>
          <input className="UserShort__SearchInputText" type="text" ref={ (input) => { this.searchInputText = input; } }
                 placeholder="Name, Surname, Birthdate, Nickname, Email, etc"
                 onKeyPress={this.searchInputOnKeyPress}
          />
          <svg onClick={this.searchButtonImageOnClick} className="UserShort__SearchButtonImage" viewBox="-100 -100 700 700">
            <path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324    c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" fill="#000000"/>
            <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951    C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46    c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465    C318.424,257.208,257.206,318.416,181.956,318.416z" fill="#000000"/>
            <path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" fill="#000000"/>
          </svg>
        </div>
        <table className="UserShort__Table">
          <thead className="UserShort__Table__Head">
            <tr>
              <td className="UserShort__Table__cell">Name</td>
              <td className="UserShort__Table__cell">Surname</td>
              <td className="UserShort__Table__cell">Birthdate</td>
              <td className="UserShort__Table__cell">Registration</td>
              <td className="UserShort__Table__cell">Nickname</td>
              <td className="UserShort__Table__cell">Email</td>
              <td className="UserShort__Table__cell">Rating</td>
            </tr>
          </thead>
          <tbody className="UserShort__Table__Body">
          {
            users.map((user, index) => {
              return (
                <tr key={index} className="UserShort__Table__Row">
                  <td className="UserShort__Table__cell">{user.name}</td>
                  <td className="UserShort__Table__cell">{user.surname}</td>
                  <td className="UserShort__Table__cell">{user.birthdate}</td>
                  <td className="UserShort__Table__cell">{user.regdate}</td>
                  <td className="UserShort__Table__cell">{user.nickname}</td>
                  <td className="UserShort__Table__cell">{user.email}</td>
                  <td className="UserShort__Table__cell">{user.rating}</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>

      </div>
    );
  }

}
