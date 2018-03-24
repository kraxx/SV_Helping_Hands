import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import MapMarkers from './MapMarkers';
import SearchBox from  './SearchBox';
import MapFooter from './MapFooter';
import NavButton from './MapNavButton';
import Settings from './Settings';
import getVisibleMarkers from '../lib/getMarkers';

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
        navigator.geolocation.getCurrentPosition((curr_pos) => {
            console.log(curr_pos);
            console.log(curr_pos.coords.longitude);
            this.setState({lat: curr_pos.coords.latitude, lon: curr_pos.coords.longitude});
            console.log(this.state);
        });
    }    

    setModalVisible(active) {
        this.setState({modalVisible: active})
    }

    render() {
    const { markers, filters, region } = this.props;
    return (
        <View style={{ flex: 1 }}>
            <MapMarkers markers={getVisibleMarkers(markers, filters)} current={{latitude: this.state.lat, longitude: this.state.lon}} region={region} />
            <View style={styles.topBar}>
                <SearchBox />
                <NavButton route={this.props.navigation} icon={'view-list'} dest={'List'}/>
                <TouchableOpacity
                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <Text> XDDDD </Text>
                </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 175}}>
                <MapFooter markers={markers} filters={filters}/>
            </View>
            <Modal
                visible={this.state.modalVisible}
                transparent={true}
                onRequestClose={() => console.log('Modal has been closed')}
                animationType='slide'
            >
                <View style={styles.modal}>
                    <Settings />
                </View>
            </Modal>
        </View>
    );
  }
}
                // <NavButton route={this.props.navigation} icon={'filter-list'} dest={'Filters'}/>

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  region: state.homeApp.region,
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
    },
    modal: {
        // marginTop: 24,
        height: '70%',
        backgroundColor: 'rgba(0,0,0,.5)',
    }
});

const MapScreen = connect(mapStateToProps)(MapScreenView);

export default MapScreen;
