import React, { Component } from 'react';

export default class JSONResources {

  constructor() {
    this.jsonUserData = require('./user.json');
    this.jsonUsers = require('./users.json');
    this.jsonArticles = require('./articles.json');
  }

}