import React, { Component } from 'react';
import { View, Image } from 'react-native';
import icons from './Resources';

export default class IconSquare extends Component {
    render() {
        return(
            <View style={{backgroundColor: icons[this.props.tag].color, alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Image style={{tintColor: '#37474f'}} source={icons[this.props.tag].image} />
            </View>
        )
    }
}
