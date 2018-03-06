import React, { Component } from "react";
import { connect } from 'react-redux';
import { Switch, Text, FlatList, View } from 'react-native';
import { toggleSwitch } from "../actions";

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

class SettingsView extends Component {
  render() {
    const { settings, onToggleSwitch } = this.props;
    return (
      <FlatList
        data={settings}
        renderItem={({item}) =>
          <SettingsRow item={item} onToggleSwitch={() => onToggleSwitch(item.key)}/>
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
