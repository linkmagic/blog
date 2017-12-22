import React from 'react';
import './Logo.css';

export default class Logo extends React.Component {

  render() {
    return (
      <div className="SiteLogo">
        <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;
        <a className="SiteLogo__Title" href="/">dev.ua</a>
      </div>
    );
  }

}