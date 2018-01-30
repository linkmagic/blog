import React, { Component } from 'react';

class PanelHorizSpace extends Component {

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

export default PanelHorizSpace;