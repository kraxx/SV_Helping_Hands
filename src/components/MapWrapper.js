import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import icons from './Resources';
import { initialRegion } from '../lib/database'

const animationTime = 800;

export default class MapWrapper extends Component {

    constructor() {
        super()
        this.state = {
            region: initialRegion
        }
        console.log(initialRegion)
    }

    getCurrentLocation = () => {
        return new Promise(
            (resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    position => resolve(position),
                    err => reject(err)
                )
            }
        )
    }

    componentWillMount() {
        return this.getCurrentLocation().then(
            position => {
                if (position) {
                    this.setState({
                        region: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        }
                    })
                }
            }
        )
    }

    moveMap = (latLng) => {
        this.mapView.animateToCoordinate(latLng, animationTime)
    }

    render() {
        return(
            <MapView
                style={{ flex: 1 }}
                showsUserLocation={true}
                region={this.state.region}
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
                    coordinate={this.state.region}
                    title={"I am here!"}
                    description={"Current Location"}
                    pinColor={'#ffe20c'}
                />
            </MapView>
        );
    }
}