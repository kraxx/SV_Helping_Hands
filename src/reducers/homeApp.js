import { data, initialRegion } from '../lib/database';

const initialState = {
    markers: data,
    region: initialRegion,
}

const homeApp = (state = initialState, action) => {
  switch (action.type) {
    case 'REGION_CHANGE': {
        return {
            ...state,
            region: {
                latitude: action.region.latitude,
                longitude: action.region.longitude,
                latitudeDelta: state.region.latitudeDelta,
                longitudeDelta: state.region.longitudeDelta,
            }
        }
    }
    default:
      return state
  }
}

export default homeApp
