
import React, { Component } from "react";
import { connect } from 'react-redux';
import { FlatList, Text, ScrollView } from 'react-native';

const getVisibleMarkers = (markers, filters) => {
  var filterMarkers = markers;
  for (var filter in filters) {
    console.log(filters[filter])
    if (!filters[filter].value) {
      filterMarkers = filterMarkers.filter(f => f.type == filters[filter].key)
    }
  }
  return filterMarkers
}

class MapListView extends Component {
  render() {
    const { markers, filters } = this.props;
    return (
      <ScrollView>
        <FlatList
          data={getVisibleMarkers(markers, filters)}
          renderItem={({item}) =>
            <Text>{item.title}</Text>
          }
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
});

const MapList = connect(mapStateToProps)(MapListView);

export default MapList
