import React, { Component } from "react";
import { connect } from 'react-redux';
import MapMarkers from './MapMarkers';

const getVisibleMarkers = (markers, filters) => {
  var filterMarkers = markers;
  for (var filter in filters) {
    console.log(filters[filter])
    if (!filters[filter].value) {
      filterMarkers = filterMarkers.filter(f => f.type == filters[filter].key)
    }
  }
  return filterMarkers
}

class MapScreenView extends Component {
  render() {
    const { markers, filters } = this.props;
    return <MapMarkers markers={getVisibleMarkers(markers,filters)}/>;
  }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
});

const MapScreen = connect(mapStateToProps)(MapScreenView);

export default MapScreen;
