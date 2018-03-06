const initialState = {
  markers: [{
    key: "1",
    latlng: {
      latitude: 37.5739,
      longitude: -122.0036,
    },
    title: 'Test',
    description: 'Test',
    type: "Food",
    },{
    key: "2",
    latlng: {
      latitude: 37.548271,
      longitude: -121.988571,
    },
    title: 'Test2',
    description: 'Test2',
    type: "Clothing",
    }],
}

function homeApp(state = initialState, action) {
  switch (action.type){
    default:
      return state
  }
}

export default homeApp
