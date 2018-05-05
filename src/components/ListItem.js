import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconSquare from './IconSquare';

const getDayInfo = () => {
    let day = new Date()
    return {
        dayOfWeek: day.getDay(),
        hour: day.getHours()
    }
}

const today = getDayInfo()

export default class ListItem extends Component {

    formatTime = (open, close) => {
        if (open === 0 || close === 0) {
            return <Text style={styles.openToday}>{"Open all day"}</Text>
        } else if (today.hour < open || today.hour >= close) {
            return <Text style={styles.closedToday}>{"Closed today"}</Text>
        }
        return <Text style={styles.openToday}>{"Open today from: "}{open}{" to "}{close}</Text>
    }

    render() {
        let time = this.formatTime(
            this.props.item.hours[today.dayOfWeek][0],
            this.props.item.hours[today.dayOfWeek][1]
        )
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
                            {time}
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
    },
    openToday: {
        color: 'green'
    },
    closedToday: {
        color: 'red'
    },
})