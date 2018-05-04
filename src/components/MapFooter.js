import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ListItem from './ListItem';
import getVisibleMarkers from '../lib/getMarkers';
import { regionChange } from '../actions';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    changeLoc = (latLng) => {
        this.props.moveMap(latLng)
    }

    renderItem = (item) => {
        return (
            <ListItem
                key={item._id}
                item={item} 
                callback={() => {
                    this.changeLoc({
                        latitude: item.latitude,
                        longitude: item.longitude
                    })
                }}
            />
        );
    }
    render() {
        let markers = getVisibleMarkers(this.props.markers, this.props.filters);
        return (
            <View style={styles.container}>
                <FlatList
                    data={markers}
                    renderItem={({item}) => this.renderItem(item)}
                    keyExtractor={(item, _id) => _id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'gray',
    }
});

const mapStateToProps = state => ({
    markers: state.homeApp.markers,
    region: state.homeApp.region,
    filters: state.filterSettings.selected
});
const mapDispatchToProps = dispatch => {
    return {
        onRegionChange: region => {
            dispatch(regionChange(region))
        }
    }
}
const MapFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default MapFooter;