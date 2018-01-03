import React, { Component } from 'react';

import './UserProfile.css'

function centeredUserPhoto() {
  var photoDiv = document.getElementById('idPhotoPreview');
  var photoImg = document.getElementById('idPhotoPreview__Img');

  photoImg.style.width = photoDiv.offsetHeight - (photoDiv.offsetHeight * 0.1) + 'px';
  photoImg.style.left = Math.round((photoDiv.offsetWidth / 2) - (photoImg.offsetWidth / 2)) + 'px';
  photoImg.style.top = Math.round((photoDiv.offsetHeight / 2) - photoImg.offsetHeight / 2) + 'px';
}

export default class UserProfile extends Component {

  visiblePreviewPhoto =() => {
    var photoDiv = document.getElementById('idPhotoPreview');
    photoDiv.classList.toggle('PhotoPreview--show');
    centeredUserPhoto();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="UserProfile">
        <div className="UserProfile__Photo">
          <img className="UserProfile__Photo__Img" 
               src={data.avatar}
               onClick={this.visiblePreviewPhoto}
               alt="user avatar"/>
          <div className="UserProfile__Photo__Buttons">
            <button className="UserProfile__Photo__Button">Set</button>
            <button className="UserProfile__Photo__Button">Clear</button>
          </div>
          
        </div>
        <div className="UserProfile__Details">
          <p className="UserProfile__Details__Name">
            <span className="UserProfile__Details__Tag">Name:&nbsp;</span>
            {data.name}
          </p>
          <p className="UserProfile__Details__Surname">
            <span className="UserProfile__Details__Tag">Surname:&nbsp;</span>
            {data.surname}
          </p>
          <p className="UserProfile__Details__Birthdate">
            <span className="UserProfile__Details__Tag">Birthdate:&nbsp;</span>
            {data.birthdate}
          </p>
          <p className="UserProfile__Details__RegDate">
            <span className="UserProfile__Details__Tag">Registration:&nbsp;</span>
            {data.regdate}
          </p>
          <p className="UserProfile__Details__Nickname">
            <span className="UserProfile__Details__Tag">Nickname:&nbsp;</span>
            {data.nickname}
          </p>
          <p className="UserProfile__Details__Email">
            <span className="UserProfile__Details__Tag">E-mail:&nbsp;</span>
            <a href={'mailto:' + data.email}>{data.email}</a>
          </p>
          <p className="UserProfile__Details__Rating">
            <span className="UserProfile__Details__Tag">Rating:&nbsp;</span>
            {data.rating}
          </p>
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