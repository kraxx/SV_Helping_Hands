import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const MapMarkers = ({markers}) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 37.548271,
      longitude: -121.988571,
      latitudeDelta: .0912312,
      longitudeDelta: .04
    }}
  >
    {markers.map((marker, index) =>
      <MapView.Marker
        key={index}
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
      />
    )}
  </MapView>
);

export default MapMarkers;
