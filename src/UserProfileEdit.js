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

    if (userData.name !== this.UserNameTextInput.value
      || userData.surname !== this.UserSurnameTextInput.value
      || userData.nickname !== this.UserNicknameTextInput.value
      || userData.email !== this.UserEmailTextInput.value
    ) {
      isChanged = true;
    }
    this.setState({
      userDataIsChanged: isChanged
    });
  };

  saveChangesOnClick = () => {
    let userData = {
      userid: this.props.userData.userid,
      name: this.UserNameTextInput.value,
      surname: this.UserSurnameTextInput.value,
      birthdate: this.props.userData.birthdate, // !!!
      nickname: this.UserNicknameTextInput.value,
      email: this.UserEmailTextInput.value,
      avatar: this.props.userData // !!!
    };

    this.props.onSaveUserChanges(userData);
    this.props.onUpdateDataUser(userData);
    this.setState({
      userDataIsChanged: false
    });

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
                <input className="UserProfile__Details__Input" type="text"
                       defaultValue={userData.name} onBlur={this.userDataFieldOnBlur}
                       ref={(input) => { this.UserNameTextInput = input; }}
                />
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Surname:</span></td>
              <td>
                <input className="UserProfile__Details__Input" type="text"
                       defaultValue={userData.surname} onBlur={this.userDataFieldOnBlur}
                       ref={(input) => { this.UserSurnameTextInput = input; }}/>
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
              <td><input className="UserProfile__Details__Input" type="text"
                         defaultValue={userData.nickname} onBlur={this.userDataFieldOnBlur}
                         ref={(input) => { this.UserNicknameTextInput = input; }}/>
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">E-mail:</span></td>
              <td><input className="UserProfile__Details__Input" type="text"
                         defaultValue={userData.email} onBlur={this.userDataFieldOnBlur}
                         ref={(input) => { this.UserEmailTextInput = input; }} />
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

  dispatch => ({
    onSaveUserChanges: (userInfo) => {
      dispatch({ type: 'EDIT_USER', userInfo });
    },
    onUpdateDataUser: (userInfo) => {
      dispatch({ type: 'UPDATE_DATA_USER', userInfo });
    },
    onDisplayContentChange: (action) => {
      dispatch({ type: 'DISPLAY_CONTENT', action });
    }
  })

)(UserProfileEdit);