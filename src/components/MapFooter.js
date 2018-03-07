import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default class MapFooter extends Component {
    constructor() {
        super();
        this.state = {}
        this.getLoc = this.getLoc.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
    getLoc() {
        navigator.geolocation.getCurrentPosition((loc) => {console.log(loc)});
    }

    renderItem(item) {
        return (
            <View style={styles.listItem}>
                <FontAwesome name='bed' />
                <Text>{item.key} Name of Place</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key:'a'},{key:'b'},{key:'c'},{key:'d'}]}
                    renderItem={({item}) => this.renderItem(item)}
                    ListHeaderComponent={<View style={{alignItems: 'center'}}><Entypo name='minus' size={20}/></View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .6,
        flexDirection: 'row',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: 'gray',
    }
});
