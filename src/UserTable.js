import React, { Component } from 'react';

import './UserTable.css';

export default class UserTable extends Component {

  render() {
    const { users } = this.props;

    return (
      <div className="UserShort">
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
