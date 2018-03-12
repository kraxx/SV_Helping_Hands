import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapMarkers from './MapMarkers';
import SearchBox from  './SearchBox';
import MapFooter from './MapFooter';
import NavButton from './MapNavButton';
import getVisibleMarkers from '../lib/getMarkers';

class MapScreenView extends Component {
    constructor() {
        super();
        this.state = {
            lat: 0,
            lon: 0,
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((curr_pos) => {
            console.log(curr_pos);
            console.log(curr_pos.coords.longitude);
            this.setState({lat: curr_pos.coords.latitude, lon: curr_pos.coords.longitude});
            console.log(this.state);
        });
    }

    render() {
    const { markers, filters } = this.props;
    return (
        <View style={{ flex: 1 }}>
            <MapMarkers markers={getVisibleMarkers(markers, filters)} current={{latitude: this.state.lat, longitude: this.state.lon}}/>
            <View style={styles.topBar}>
                <SearchBox />
                <NavButton route={this.props.navigation} icon={'view-list'} dest={'List'}/>
                <NavButton route={this.props.navigation} icon={'filter-list'} dest={'Settings'}/>
            </View>
            <MapFooter />
        </View>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
});

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
    }
});

const MapScreen = connect(mapStateToProps)(MapScreenView);

export default MapScreen;
