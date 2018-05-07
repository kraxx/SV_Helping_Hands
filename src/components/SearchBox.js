import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { searchFilterOn, searchFilterOff } from "../actions";
import { MaterialIcons } from '@expo/vector-icons';

class SearchBoxView extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    onChangeText = (text, dispatcher) => {
        this.setState({text: text});
        if (text === '') {
            dispatcher.searchFilterOff()
        } else {
            dispatcher.searchFilterOn(text)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MaterialIcons name='search' size={30} color='#900'/>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.onChangeText(text, this.props)}
                    value={this.state.text}
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

const mapDispatchToProps = dispatch => {
  return {
    searchFilterOff: () => {
      dispatch(searchFilterOff())
    },
    searchFilterOn: text => {
      dispatch(searchFilterOn(text))
    }
  }
}
const SearchBox = connect(
  null,
  mapDispatchToProps
)(SearchBoxView);

export default SearchBox;