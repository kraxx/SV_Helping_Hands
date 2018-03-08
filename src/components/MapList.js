import React, { Component } from "react"
import { connect } from 'react-redux'
import { FlatList, View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import icons from './Resources'
import getVisibleMarkers from '../lib/MapMarkerFilter'

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

class ListItem extends Component {
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
