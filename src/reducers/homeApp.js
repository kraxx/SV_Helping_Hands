import data from '../lib/database';

const initialState = {
    markers: data,
    region: {
        latitude: 37.389264,
        longitude: -122.082944,
        latitudeDelta: .0912312,
        longitudeDelta: .04
    }
}

function homeApp(state = initialState, action) {
  switch (action.type) {
    case 'REGION_CHANGE': {
        return {
            ...state,
            region: {
                latitude: action.region.latitude,
                longitude: action.region.longitude,
                latitudeDelta: .0912312,
                longitudeDelta: .04
            }
        }
    }
    default:
      return state
  }
}

export default homeApp
