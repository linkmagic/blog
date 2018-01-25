import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserProfileEdit.css';

const months = [
    'January', 'February', 'March',
    'April', 'May', 'Jun',
    'July', 'August', 'September',
    'October', 'November', 'Devember'
];

// not a leap year
const days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

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

    let birthdate = this.SelectBoxYear.value + '.' + this.SelectBoxMonth.value + '.' + this.SelectBoxDay.value;

    if (userData.name !== this.UserNameTextInput.value
      || userData.surname !== this.UserSurnameTextInput.value
      || userData.nickname !== this.UserNicknameTextInput.value
      || userData.email !== this.UserEmailTextInput.value
      || userData.birthdate !== birthdate
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
      birthdate: this.SelectBoxYear.value + '.' + this.SelectBoxMonth.value + '.' + this.SelectBoxDay.value,
      nickname: this.UserNicknameTextInput.value,
      email: this.UserEmailTextInput.value,
      avatar: this.props.userData.avatar // !!!
    };

    this.props.onSaveUserChanges(userData);
    this.props.onUpdateDataUser(userData);
    this.setState({
      userDataIsChanged: false
    });

  };

  SelectBoxBirthDateOnClick = () => {
    this.userDataFieldOnBlur();
  };

  initDateComponent = () => {
    let nowDate = new Date();

    for (let i = 1901; i <= nowDate.getFullYear(); i++) {
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      this.SelectBoxYear.appendChild(opt);
    }

    for (let i = 0; i < months.length; i++) {
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = months[i];
      this.SelectBoxMonth.appendChild(opt);
    }
  };

  createDays = () => {
    function isLeapYear(year) {
      return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }

    if (this.SelectBoxYear.selectedIndex > 0 && this.SelectBoxMonth.selectedIndex > 0) {
      let year = +this.SelectBoxYear.options[this.SelectBoxYear.selectedIndex].value;
      let month = +this.SelectBoxMonth.options[this.SelectBoxMonth.selectedIndex].value;
      let dayCount = days[month] + ((month === 1 && isLeapYear(year)) ? 1 : 0);

      let select = document.getElementById("idDateChooser__Day");
      while (select.options.length > 0) {
        select.remove(0);
      }

      let opt = document.createElement('option');
      opt.value = '-1';
      opt.innerHTML = 'Day';
      opt.className = 'DateChooser__SelectBox-inactive';
      this.SelectBoxDay.appendChild(opt);

      for (let i = 1; i <= dayCount; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        this.SelectBoxDay.appendChild(opt);
      }
    }
  };

  setUIUserBirthDate = () => {
    let birthdate = this.props.userData.birthdate.split('.');
    this.SelectBoxYear.value = birthdate[0];
    this.SelectBoxMonth.value = +birthdate[1];
    this.createDays();
    this.SelectBoxDay.value = birthdate[2];
  };

  componentDidMount() {
    this.initDateComponent();
    this.setUIUserBirthDate();
  }

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
               alt="user avatar"
          />
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
                       ref={(input) => { this.UserSurnameTextInput = input; }}
                />
              </td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Birthdate:</span></td>
              <td>
                <div className="DateChooser">
                  <select className="DateChooser__SelectBox"
                          ref={(select) => { this.SelectBoxYear = select; }}
                          onChange={this.createDays}
                          onClick={this.SelectBoxBirthDateOnClick}
                          onBlur={this.userDataFieldOnBlur}
                  >
                    <option className="DateChooser__SelectBox-inactive" value="-1">Year</option>
                  </select>
                  <select className="DateChooser__SelectBox"
                          ref={(select) => { this.SelectBoxMonth = select; }}
                          onChange={this.createDays}
                          onClick={this.SelectBoxBirthDateOnClick}
                          onBlur={this.userDataFieldOnBlur}
                  >
                    <option className="DateChooser__SelectBox-inactive" value="-1">Month</option>
                  </select>
                  <select className="DateChooser__SelectBox" id="idDateChooser__Day"
                          ref={(select) => { this.SelectBoxDay = select; }}
                          onClick={this.SelectBoxBirthDateOnClick}
                          onBlur={this.userDataFieldOnBlur}
                  >
                    <option className="DateChooser__SelectBox-inactive" value="-1">Day</option>
                  </select>
                </div>
              </td>
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
               title="Click to close"
          />
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