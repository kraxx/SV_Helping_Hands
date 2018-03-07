import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import MapMarkers from './MapMarkers';
import SearchBox from  './SearchBox';
import MapFooter from './MapFooter';
import NavButton from './MapNavButton';

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

class MapScreenView extends Component {
  render() {
    const { markers, filters } = this.props;
    return (
        <View style={{ flex: 1 }}>
            <MapMarkers markers={getVisibleMarkers(markers, filters)} />
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
