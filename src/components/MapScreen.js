import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity, Button } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import MapWrapper from './MapWrapper';
import SearchBox from  './SearchBox';
import MapFooter from './MapFooter';
import FilterSettings from './FilterSettings';
import getVisibleMarkers from '../lib/getMarkers';

const filterCogImg = require('../images/settings-nut-black-64.png');

class MapScreenView extends Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible(active) {
        this.setState({modalVisible: active})
    }

    moveMap = (latLng) => {
        this.mapMarker.moveMap(latLng)
    }

    render() {
        let visibleMarkers = getVisibleMarkers(
            this.props.markers,
            this.props.categoryFilters,
            this.props.searchFilters
        )
        return (
            <View style={styles.mapScreen}>
                <MapWrapper
                    markers={visibleMarkers}
                    current={{latitude: this.state.lat, longitude: this.state.lon}}
                    ref={component => this.mapMarker = component}
                />
                <View style={styles.topBar}>
                    <SearchBox />
                    <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)} >
                        <Image source={filterCogImg} style={styles.filterCog}/>
                    </TouchableOpacity>
                </View>
                <MapFooter markers={visibleMarkers} moveMap={(latLng) => this.moveMap(latLng)}/>
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
                    animationType='slide'
                >
                    <FilterSettings triggerClose={() => this.setModalVisible(!this.state.modalVisible)} />
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
});

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  region: state.homeApp.region,
  categoryFilters: state.categoryFilter.selected,
  searchFilters: state.searchFilter
});

const MapScreen = connect(mapStateToProps)(MapScreenView);

export default MapScreen;