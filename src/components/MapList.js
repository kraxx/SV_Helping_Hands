import React, { Component } from "react"
import { connect } from 'react-redux'
import { FlatList, View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import icons from './Resources'
<<<<<<< HEAD
import getVisibleMarkers from '../lib/getMarkers';
=======
>>>>>>> parent of 698e845... created lib folder with map marker filters

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

<<<<<<< HEAD
export class ListItem extends Component {
=======
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

class ListItem extends Component {
>>>>>>> parent of 698e845... created lib folder with map marker filters
    render() {
        return(
            <View style={style.listItemContainer}>
                <IconSquare type={this.props.item.type} />
                <View style={style.listText} >
                    <Text style={style.listTextTitle}>{this.props.item.title}</Text>
                    <Text>{this.props.item.description}</Text>
                </View>
            </View>
        )
    }
}

class MapListView extends Component {
  render() {
    const { markers, filters } = this.props
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
