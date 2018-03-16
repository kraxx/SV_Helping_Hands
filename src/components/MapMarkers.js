import React, {  Component } from 'react';
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

export default class MapMarkers extends Component {
    render() {
        return(
            <MapView
                style={{ flex: 1 }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                region={this.props.region}
            >
                {this.props.markers.map((marker, index) =>
                    <MapView.Marker
                        key={index}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        title={marker.company}
                        description={marker.description[0]}
                    />
                )}
                <MapView.Marker
                    coordinate={this.props.current}
                    title={"I am here!"}
                    description={"Current Location"}
                    pinColor={'blue'}
                />
            </MapView>
        );
    }
}

