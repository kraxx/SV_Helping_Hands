import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import Navigator from "./navigation";

export default class AppNavigation extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

