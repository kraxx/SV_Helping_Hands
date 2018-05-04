import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import icons from './Resources';

export default class MapMarkers extends Component {

    moveMap = (latLng) => {
        this.mapView.animateToCoordinate(latLng, 800)
    }

    render() {
        return(
            <MapView
                style={{ flex: 1 }}
                showsUserLocation={true}
                initialRegion={this.props.region}
                ref ={component => this.mapView = component}
            >
                {this.props.markers.map((marker, index) =>
                    <MapView.Marker
                        key={index}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                        title={marker.company}
                        description={marker.tag}
                        pinColor={icons[marker.tag].color}
                    />
                )}
                <MapView.Marker
                    coordinate={this.props.current}
                    title={"I am here!"}
                    description={"Current Location"}
                    pinColor={'#ffe20c'}
                />
            </MapView>
        );
    }
}