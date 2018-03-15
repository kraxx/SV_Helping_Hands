import React, { Component } from "react"
import { connect } from 'react-redux'
import { FlatList, View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import icons from './Resources'
import getVisibleMarkers from '../lib/getMarkers';


class IconSquare extends Component {
    render() {
        return(
            <View style={{backgroundColor: icons[this.props.tag].color, flex: .25}}>
                <Image style={style.listIcon} source={icons[this.props.tag].image} />
            </View>
        )
    }
}

export class ListItem extends Component {
    render() {
        let hours;
        let {open, close} =  this.props.item.hours[0];
        console.log(open, close);
        return(
            <View style={style.listItemContainer}>
                <IconSquare tag={this.props.item.tag} />
                <View style={style.listText}>
                    <View style={{}} >
                        <Text style={style.listTextTitle}>{this.props.item.company}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.listTextAdrs}>{this.props.item.address}</Text>
                    </View>
                    <View style={style.listTextHours}>
                        <Text>{this.props.item.hours[0][0]} - {this.props.item.hours[0][1]}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

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

const style = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    listIcon: {
        margin: 6,
    },
    listText: {
        flex: .8,
        paddingTop: 8,
        paddingLeft: 8,
        flexDirection: 'column',
    },
    listTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listTextAdrs: {
        fontSize: 12,
        fontWeight: '100',
        flexWrap: 'wrap',
    },
    listTextHours: {
        fontSize: 12,
        fontWeight: '100',
        flexWrap: 'wrap',
    }
})

const MapList = connect(mapStateToProps)(MapListView)

export default MapList
