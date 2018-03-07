import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class NavButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.route.navigate(this.props.dest)}>
                    <MaterialIcons name={this.props.icon} size={20} />
                </TouchableOpacity>
            </View>
        );
    }
}
