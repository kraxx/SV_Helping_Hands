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

// class AppNavigation extends Component {
//   render() {
//     const { navigationState, dispatch } = this.props;
//     return (
//       <Navigator
//         navigation={addNavigationHelpers({ dispatch, state: navigationState })}
//       />
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     navigationState: state.navigationReducer.navigationState
//   };
// };
//
// export default connect(mapStateToProps)(AppNavigation);
