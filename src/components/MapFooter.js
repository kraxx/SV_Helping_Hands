import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ListItem from './ListItem';
import getVisibleMarkers from '../lib/getMarkers';
import { regionChange } from '../actions';

class Footer extends Component {
    constructor() {
        super();
        this.state = {}
        this.getLoc = this.getLoc.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
    getLoc() {
        navigator.geolocation.getCurrentPosition((loc) => {console.log(loc)});
    }

    renderItem(item) {
        return (
            <ListItem key={item._id} item={item} callback={() => {
                    this.props.onRegionChange({latitude: item.latitude, longitude: item.longitude});
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
