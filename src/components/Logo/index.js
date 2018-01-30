import React, { Component } from 'react';

import './style.css';

class Logo extends Component {

  render() {
    return (
      <div className="SiteLogo">
        <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;
        <a className="SiteLogo__Title" href="/">dev.ua</a>
      </div>
    );
  }

}

export default Logo;