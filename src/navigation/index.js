import React, { Component } from "react"
// import { View } from 'react-native'
import { connect } from "react-redux"
import { addNavigationHelpers } from "react-navigation"
import Navigator from "./navigation"

export default class AppNavigation extends Component {
  render() {
    return (
  		<Navigator/>
    )
  }
}
