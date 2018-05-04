import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity, Button } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import MapMarkers from './MapMarkers';
import SearchBox from  './SearchBox';
import MapFooter from './MapFooter';
import FilterSettings from './FilterSettings';
import getVisibleMarkers from '../lib/getMarkers';

const filterCogImg = require('../images/settings-nut-black-64.png');

class MapScreenView extends Component {
    constructor() {
        super();
        this.state = {
            lat: 0,
            lon: 0,
            modalVisible: false,
        }
    }

    componentWillMount() {
        console.log("will mount")
        navigator.geolocation.getCurrentPosition(
            (curr_pos) => {
                console.log("Got geo coordinates!")
                this.setState({
                    lat: curr_pos.coords.latitude,
                    lon: curr_pos.coords.longitude
                })
            },
            (err) => {
                console.log("Failed to get geo coordinates; ", err)
            }
        )
    }

    componentDidMount() {
        console.log("Did mount")
    }

    componentWillUnmount() {
        console.log("Unmounting")
    }
    setModalVisible(active) {
        this.setState({modalVisible: active})
    }

    moveMap = (latLng) => {
        this.mapMarker.moveMap(latLng)
    }

    render() {
        const { markers, filters, region } = this.props;
        return (
            <View style={styles.mapScreen}>
                <MapMarkers
                    markers={getVisibleMarkers(markers, filters)}
                    current={{latitude: this.state.lat, longitude: this.state.lon}}
                    region={region}
                    ref={component => this.mapMarker = component}
                />
                <View style={styles.topBar}>
                    <SearchBox />
                    <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)} >
                        <Image source={filterCogImg} style={styles.filterCog}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.mapFooter}>
                    <MapFooter markers={markers} filters={filters} moveMap={(latLng) => this.moveMap(latLng)}/>
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
                    animationType='slide'
                >
                    <View style={styles.modal}>
                        <FilterSettings triggerClose={() => this.setModalVisible(!this.state.modalVisible)} />
                    </View>
                </Modal>
            </View>
    )
  }
}

const styles = StyleSheet.create({
    mapScreen: {
        marginTop: 24,
        flex: 1,
    },
    mapFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 175,
    },
    filterCog: {
        marginLeft: 5,
        height: 30,
        width: 30,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    modal: {
        height: '100%',
        backgroundColor: 'rgba(51,51,77,.85)',
    }
});

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  region: state.homeApp.region,
  filters: state.filterSettings.selected
});

const MapScreen = connect(mapStateToProps)(MapScreenView);

export default MapScreen;