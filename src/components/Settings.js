import React, { Component } from "react";
import { connect } from 'react-redux';
import { Switch, StyleSheet, Text, Image, FlatList, View, Dimensions, TouchableOpacity } from 'react-native';
import { toggleSwitch } from "../actions";
import icons from "./Resources"

const style = StyleSheet.create({
    listIcon: {
        margin: 10,
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
        flexDirection: 'column',
    },
    gridItem: {
        margin: 5,
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').width / 2.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: (Dimensions.get('window').width / 2.2) / 2,
        borderWidth: 1.5,
        borderColor: 'black',
    },
})
/*
const SettingsRow = ({item, onToggleSwitch}) => (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-around"
    }}>
        <Text>{item.key}</Text>
        <Switch
          onValueChange={onToggleSwitch}
          value={item.value}
        />
    </View>
);
*/
class IconCircle extends Component {
    constructor(props) {
        super(props)
        this.state = { toggledOn: true }
    }
    _onPressButton = () => {
        this.setState({ toggledOn: !this.state.toggledOn });
        this.props.toggle();
    }
    render() {
        let toggledColor = this.state.toggledOn ? icons[this.props.type].color : 'pink'
        let toggledBorder = this.state.toggledOn ? 3 : 1.5
        return (
            <TouchableOpacity 
            style={[style.gridItem, { backgroundColor: toggledColor, borderWidth: toggledBorder }]}
            onPress={this._onPressButton}>
                <Image style={style.listIcon} source={icons[this.props.type].image} />
            </TouchableOpacity>
        )
    }
}

class SettingsView extends Component {
  render() {
    const { settings, onToggleSwitch } = this.props;
    return (
      <FlatList
        data={settings}
        numColumns={2}
        style={style.flatList}
        renderItem={({item}) =>
          // <SettingsRow item={item} onToggleSwitch={() => onToggleSwitch(item.key)}/>
          <IconCircle type={item.key} toggle={() => onToggleSwitch(item.key)}/>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.selected
});

const mapDispatchToProps = dispatch => {
  return {
    onToggleSwitch: id => {
      dispatch(toggleSwitch(id))
    }
  }
}

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);

export default Settings;
