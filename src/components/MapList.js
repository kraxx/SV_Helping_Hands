import React, { Component } from "react";
import { connect } from 'react-redux';
import { FlatList, View, Text, Image, ScrollView, StyleSheet, Modal, TouchableHighlight} from 'react-native';
import ListItem from './ListItem';
import IconSquare from './IconSquare';
import getVisibleMarkers from '../lib/getMarkers';

class MapListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            active: this.props.markers[0]
        }
    }

    setModalVisible(modalVisible, active) {
        this.setState({modalVisible, active})
    }

    render() {
        const { markers, filters } = this.props
        return (
                <View>
                    <Modal
                        visible={this.state.modalVisible}
                        onRequestClose={() => console.log('Modal has been closed')}
                        onShow={() => console.log(this.state.active)}
                    >
                        <View>
                            <Text>Hello!{this.state.active.company}</Text>
                            <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible, null)}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                    <FlatList
                        data={getVisibleMarkers(markers, filters)}
                        renderItem={
                            ({item}) => <ListItem key={item._id} item={item} callback={() => this.setModalVisible(true, item)}/>
                        }
                    />
                </View>
        );
    }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  filters: state.settings.selected
})

const MapList = connect(mapStateToProps)(MapListView)

export default MapList
