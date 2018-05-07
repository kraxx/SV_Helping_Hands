import React, { Component } from "react";
import { connect } from 'react-redux';
import { FlatList, View, Text, Image, ScrollView, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import ListItem from './ListItem';
import IconSquare from './IconSquare';
import getVisibleMarkers from '../lib/getMarkers';

const styles = StyleSheet.create({
    modal: {
        marginTop: 24,
        height: '80%',
        backgroundColor: 'green',
    }
})

class MapListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            active: this.props.markers[0]
        }
    }

    setModalVisible(active) {
        this.setState({modalVisible: active})
    }

    render() {
        const { markers, categoryFilters, searchFilters } = this.props
        return (
                <View>
                    <Modal
                        visible={this.state.modalVisible}
                        onRequestClose={() => console.log('Modal has been closed')}
                        onShow={() => console.log(this.state.active)}
                    >
                        <View style={styles.modal}>
                            <Text>Hello!{this.state.active.company}</Text>
                            <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                    <FlatList
                        data={getVisibleMarkers(markers, filters, searchFilters)}
                        renderItem={
                            ({item}) => <ListItem key={item._id} item={item} callback={() => this.setModalVisible(true, item)}/>
                        }
                        keyExtractor={(item, _id) => _id}
                    />
                </View>
        );
    }
}

const mapStateToProps = state => ({
  markers: state.homeApp.markers,
  categoryFilters: state.categoryFilter.selected,
  searchFilters: state.searchFilter
})

const MapList = connect(mapStateToProps)(MapListView)

export default MapList
