import React, { Component } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <MaterialIcons name='search' size={30} color='#900'/>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.value}
                    underlineColorAndroid={'transparent'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: .9,
            flexDirection: 'row',
            borderColor: 'gray',
            backgroundColor: 'white',
            borderWidth: 1
        },
        input: {
            flex: .8,
        }
    });
