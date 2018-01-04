import React, { Component } from 'react';

export default class PanelHorizSpace extends Component {

  render() {
    const { spaceWidth } = this.props;

    let spaceStyle = {
      display: 'inline-block',
      width: spaceWidth + 'px'
    };

    return (
      <div className="PanelHorizSpace" style={spaceStyle} />
    );
  }

}