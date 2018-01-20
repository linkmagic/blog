import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserProfileEdit.css';

class UserProfileEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userDataIsChanged: false
    };
  }

  userDataFieldOnBlur = () => {
    const { userData } = this.props;
    let isChanged = false;

    if (userData.name !== String(document.getElementById('idUserNameTextInput').value)
      || userData.surname !== String(document.getElementById('idUserSurnameTextInput').value)
      || userData.nickname !== String(document.getElementById('idUserNicknameTextInput').value)
      || userData.email !== String(document.getElementById('idUserEmailTextInput').value)
    ) {
      isChanged = true;
    }
    this.setState({
      userDataIsChanged: isChanged
    })
  };

  saveChangesOnClick = () => {

  };

  render() {
    let { userData } = this.props;
    const { userDataIsChanged } = this.state;

    if ('avatar' in userData && userData.avatar === '') {
      userData.avatar = 'img/avatar-default.png';
    }

    return (
      <div className="UserProfile">
        <div className="UserProfile__Photo">
          <img className="UserProfile__Photo__Img"
               src={userData.avatar}
               onClick={this.visiblePreviewPhoto}
               alt="user avatar"/>
        </div>
        <div className="UserProfile__Details">
          <table className="UserProfile__Details__Table">
            <tbody>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Name:</span></td>
              <td>
                <input id="idUserNameTextInput" className="UserProfile__Details__Input"
                       type="text" defaultValue={userData.name} onBlur={this.userDataFieldOnBlur}/>
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Surname:</span></td>
              <td>
                <input id="idUserSurnameTextInput" className="UserProfile__Details__Input"
                       type="text" defaultValue={userData.surname} onBlur={this.userDataFieldOnBlur}/>
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Birthdate:</span></td>
              <td>{userData.birthdate}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Registration:</span></td>
              <td>{userData.regdate}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Nickname:</span></td>
              <td><input id="idUserNicknameTextInput" className="UserProfile__Details__Input" type="text"
                         defaultValue={userData.nickname} onBlur={this.userDataFieldOnBlur}/>
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">E-mail:</span></td>
              <td><input id="idUserEmailTextInput" className="UserProfile__Details__Input" type="text"
                         defaultValue={userData.email} onBlur={this.userDataFieldOnBlur}/>
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Rating:</span></td>
              <td>{userData.rating}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Publications:</span></td>
              <td>{userData.publications}</td>
            </tr>
            </tbody>
          </table>
          <div>
            <button disabled={!userDataIsChanged} onClick={this.saveChangesOnClick}>Save changes</button>
          </div>
        </div>

        <div id="idPhotoPreview" className="PhotoPreview" onClick={this.visiblePreviewPhoto}>
          <img id="idPhotoPreview__Img"
               className="PhotoPreview__Img"
               src={userData.avatar}
               alt="user avatar"
               title="Click to close"/>
        </div>
      </div>
    );
  }

}

export default connect(

  state => ({
    blogState: state
  }),

  dispatch => ({})

)(UserProfileEdit);