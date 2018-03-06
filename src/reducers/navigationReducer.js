import AppNavigator from "../navigation/navigation";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Home")
);

const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
