import React, { Component } from 'react';

import './ItemSocialNetwork.css';

export default class ItemSocialNetwork extends Component {

  render() {
    const { iconName } = this.props;
    let iconPath;

    switch(iconName) {

      case 'f':
        iconPath = 'img/facebook.png';
        break;

      case 'g':
        iconPath = 'img/google-plus.png';
        break;

      case 'l':
        iconPath = 'img/linkedin.png';
        break;

      case 't':
        iconPath = 'img/twitter.png';
        break;

      default:
        iconPath = 'img/unknown-social.png';
    }

    return (
      <div className="ItemSocialNetwork">
        <img className="ItemSocialNetwork__Img" src={iconPath} alt=""/>
      </div>
    );
  }

}