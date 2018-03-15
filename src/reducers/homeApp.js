import data from '../lib/database';

const initialState = {
    markers: data,
}

function homeApp(state = initialState, action) {
  switch (action.type){
    default:
      return state
  }
}

export default homeApp
