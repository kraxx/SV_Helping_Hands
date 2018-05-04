import data from '../lib/database';

// function initialState() {
//     let initialData = {
//         markers: data,
//         region: {
//             latitude: 37.389264,
//             longitude: -122.082944,
//             latitudeDelta: 0.0912312,
//             longitudeDelta: 0.04,
//         }
//     }
//     navigator.geolocation.getCurrentPosition(
//         pos => {
//             initialData.region = {
//                 latitude: pos.coords.latitude,
//                 longitude: pos.coords.longitude,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0,
//             }
//             console.log("SUCC")
//             console.log(pos)
//         }, 
//         err => {
//             console.log("FAIL")
//         }
//     )
//     console.log("DUN")
//     return initialData
// }
const initialState = {
    markers: data,
    region: {
        latitude: 37.389264,
        longitude: -122.082944,
        latitudeDelta: 0.0912312,
        longitudeDelta: 0.04,
    }
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
