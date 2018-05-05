import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconSquare from './IconSquare';

export default class ListItem extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() => {this.props.callback()}}>
                <View style={styles.listItemContainer}>
                    <View  style={{flex: .25}}>
                        <IconSquare tag={this.props.item.tag} />
                    </View>
                    <View style={styles.listText}>
                        <View>
                            <Text style={styles.listTextTitle}>{this.props.item.company}</Text>
                        </View>
                        <View>
                            <Text style={styles.listTextAdrs}>{this.props.item.address}</Text>
                        </View>
                        <View style={styles.listTextHours}>
                            <Text>{"Hours: "}{this.props.item.hours[0][0]} - {this.props.item.hours[0][1]}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 0.8,
        borderColor: '#b0bec5',
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
        fontWeight: '100',
        flexWrap: 'wrap',
    },
    listTextHours: {
        flexWrap: 'wrap',
    }
})