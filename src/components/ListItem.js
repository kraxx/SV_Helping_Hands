import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import IconSquare from './IconSquare';

export default class ListItem extends Component {
    render() {
        return(
            <View style={style.listItemContainer}>
                <TouchableHighlight style={{flex: .25}} onPress={() => this.props.callback()}>
                    <IconSquare tag={this.props.item.tag} />
                </TouchableHighlight>
                <View style={style.listText}>
                    <View>
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
