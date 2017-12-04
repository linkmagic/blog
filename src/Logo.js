import React, { Component } from 'react';
import './Logo.css';

export default class Logo extends React.Component {

  render() {
    return (
      <div className="logo">
        <sup>&lt;</sup>/<sub>&gt;</sub>&nbsp;
        <a href="/">dev.ua</a>
      </div>
    );
  }

}