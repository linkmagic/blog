import React, { Component } from 'react';

import './SiteCopyrightLabel.css';

export default class SiteCopyrightLabel extends Component {

  render() {
    const { beginYearValue } = this.props;
    let currentYearValue = (new Date()).getFullYear();

    return (
      <p className="SiteCopyrightLabel">© {beginYearValue}	&ndash; {currentYearValue}</p>
    );
  }

}