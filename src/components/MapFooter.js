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
        this.changeLoc = this.changeLoc.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    changeLoc(lat, lon) {
        this.props.onRegionChange({
            latitude: lat,
            longitude: lon
        })
    }

    renderItem(item) {
        return (
            <ListItem
                key={item._id}
                item={item} 
                callback={() => this.changeLoc(item.latitude, item.longitude)}
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

const mapStateToProps = state => ({
    markers: state.homeApp.markers,
    region: state.homeApp.region,
    filters: state.settings.selected
});

const mapDispatchToProps = dispatch => {
    return {
        onRegionChange: region => {
            dispatch(regionChange(region))
        }
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

const MapFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default MapFooter;