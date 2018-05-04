import React, { Component } from "react";
import { connect } from 'react-redux';
import { Switch, StyleSheet, Text, Image, FlatList, View, Dimensions, TouchableOpacity } from 'react-native';
import { toggleSwitch } from "../actions";
import icons from "./Resources";

const backArrow = require('../images/left-arrow-white-64.png');

class IconCircle extends Component {
    _onPressButton = () => {
        this.setState({ toggledOn: !this.state.toggledOn });
    }
    render() {
        const { item, onToggleSwitch } = this.props;
        let toggledColor = item.value == true ? icons[item.key].color : 'grey';
        let toggledBorder = item.value == true ? 3 : 1.5;
        let toggledBorderColor = item.value == true ? 'white' : 'black';
        return (
            <TouchableOpacity 
            style={[styles.gridItem, { backgroundColor: toggledColor, borderWidth: toggledBorder, borderColor: toggledBorderColor }]}
            onPress={onToggleSwitch}>
                <Image style={styles.listIcon} source={icons[item.key].image} />
            </TouchableOpacity>
        )
    }
}

class SettingsView extends Component {
    render() {
        const { settings, onToggleSwitch } = this.props;
        return (
            <View>
                <Text style={styles.filterTitle}>Filters</Text>
                <View style={styles.parent}>
                    <FlatList
                        data={settings}
                        numColumns={2}
                        style={styles.flatList}
                        renderItem={
                            ({item}) => <IconCircle item={item} onToggleSwitch={() => onToggleSwitch(item.key)}/>
                        }
                    />
                </View>
                <TouchableOpacity style={styles.backArrowParent} onPress={() => this.props.triggerClose() } >
                    <Image style={styles.backArrow} source={backArrow} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        margin: 'auto',
        alignItems: 'center',
    },
    backArrowParent: {
        position: 'absolute',
        left: 28,
        top: 8,
        height: 50,
        width: 50,
    },
    backArrow: {
        height: '100%',
        width: '100%',
    },
    filterTitle: {
        fontSize: 46,
        textAlign: 'center',
        color: 'white',
    },
    listIcon: {
        // margin: 10,
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
    flatList: {
        marginTop: 10,
        margin: 'auto',
        flexDirection: 'column',
    },
    gridItem: {
        margin: 5,
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').width / 2.2,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: (Dimensions.get('window').width / 2.2) / 2,
    },
})

const mapStateToProps = state => ({
  settings: state.filterSettings.selected
});
const mapDispatchToProps = dispatch => {
  return {
    onToggleSwitch: id => {
      dispatch(toggleSwitch(id))
    }
  }
}
const FilterSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);

export default FilterSettings;
