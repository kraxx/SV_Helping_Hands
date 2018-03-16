import React, { Component } from "react";
import { connect } from 'react-redux';
import { FlatList, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import IconSquare from './IconSquare';
import getVisibleMarkers from '../lib/getMarkers';

class MapListView extends Component {
  render() {
    const { markers, filters } = this.props
    console.log("Marker");
    console.log(markers[0]);
    return (
    <View>
        <FlatList
            data={getVisibleMarkers(markers, filters)}
            renderItem={
                ({item}) => <ListItem item={item} />
            }
        />
    </View>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
})

const MapList = connect(mapStateToProps)(MapListView)

export default MapList
