import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserProfile.css';

function centeredUserPhoto() {
  let photoDiv = document.getElementById('idPhotoPreview');
  let photoImg = document.getElementById('idPhotoPreview__Img');

  photoImg.style.width = photoDiv.offsetHeight - (photoDiv.offsetHeight * 0.1) + 'px';
  photoImg.style.left = Math.round((photoDiv.offsetWidth / 2) - (photoImg.offsetWidth / 2)) + 'px';
  photoImg.style.top = Math.round((photoDiv.offsetHeight / 2) - photoImg.offsetHeight / 2) + 'px';
}

class UserProfile extends Component {

  visiblePreviewPhoto =() => {
    let photoDiv = document.getElementById('idPhotoPreview');
    photoDiv.classList.toggle('PhotoPreview--show');
    centeredUserPhoto();
  };

  render() {
    const { userData, userId } = this.props;
    let data = {};

    if (userId) {
      // open data other user
      const { listUsers } = this.props.blogState;
      for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].userid === userId) {
          data = listUsers[i];
          break;
        }
      }
    } else {
      // open data of the logged in user
      data = userData;
    }

    if ('avatar' in data && data.avatar === '') {
      data.avatar = 'img/avatar-default.png';
    }

    return (
      <div className="UserProfile">
        <div className="UserProfile__Photo">
          <img className="UserProfile__Photo__Img" 
               src={data.avatar}
               onClick={this.visiblePreviewPhoto}
               alt="user avatar"/>
        </div>
        <div className="UserProfile__Details">
          <table className="UserProfile__Details__Table">
            <thead>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Name:</span></td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Surname:</span></td>
              <td>{data.surname}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Birthdate:</span></td>
              <td>{data.birthdate}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Registration:</span></td>
              <td>{data.regdate}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Nickname:</span></td>
              <td>{data.nickname}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">E-mail:</span></td>
              <td><a href={'mailto:' + data.email}>{data.email}</a></td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Rating:</span></td>
              <td>{data.rating}</td>
            </tr>
            <tr>
              <td className="Table__TD__Left"><span className="UserProfile__Details__Tag">Publications:</span></td>
              <td>{data.publications}</td>
            </tr>
            </thead>
          </table>
        </div>
        <div id="idPhotoPreview" className="PhotoPreview" onClick={this.visiblePreviewPhoto}>
          <img id="idPhotoPreview__Img" 
               className="PhotoPreview__Img" 
               src={data.avatar}
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

)(UserProfile);