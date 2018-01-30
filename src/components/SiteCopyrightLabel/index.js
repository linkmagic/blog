import React, { Component } from 'react';

import './style.css';

class SiteCopyrightLabel extends Component {

  render() {
    const { beginYearValue } = this.props;
    let currentYearValue = (new Date()).getFullYear();

    return (
      <p className="SiteCopyrightLabel">© {beginYearValue}	&ndash; {currentYearValue}</p>
    );
  }

}

export default SiteCopyrightLabel;