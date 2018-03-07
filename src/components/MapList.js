import React, { Component } from "react"
import { connect } from 'react-redux'
import { FlatList, View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import icons from './Resources'

const style = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'black',
    },
    listIcon: {
        margin: 6,
    },
    listText: {
        paddingTop: 8,
        paddingLeft: 8,
        flexDirection: 'column',
    },
    listTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

class IconSquare extends Component {
    render() {
        return(
            <View style={{backgroundColor: icons[this.props.type].color}}>
                <Image style={style.listIcon} source={icons[this.props.type].image} />
            </View>
        )
    }
}

const getVisibleMarkers = (markers, filters) => {
  var filterMarkers = markers
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
    const { markers, filters } = this.props
    return (
    <ScrollView>
        <FlatList
            data={getVisibleMarkers(markers, filters)}
            renderItem={
                ({item}) =>
                <View style={style.listItemContainer}>
                    <IconSquare type={item.type} />
                    <View style={style.listText} >
                        <Text style={style.listTextTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
            }
        />
    </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
})

const MapList = connect(mapStateToProps)(MapListView)

export default MapList
