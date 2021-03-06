import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, View, Text, FlatList, TouchableOpacity, PanResponder } from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ListItem from './ListItem';
import getVisibleMarkers from '../lib/getMarkers';
import { regionChange } from '../actions';

const draggableIcon = require('../images/draggable-arrows-black-64.png');

const defaultHeight = Dimensions.get('window').height - 200;
const midScreentHeight = Dimensions.get('window').height / 3;

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: defaultHeight,
        };
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                this.setState({height: gesture.moveY})
            },
        })
    }

    changeLoc = (latLng) => {
        if (this.state.height < midScreentHeight)
        this.setState({height: defaultHeight})
        this.props.moveMap(latLng)
    }

    renderItem = (item) => {
        return (
            <ListItem
                key={item._id}
                item={item} 
                callback={() => {
                    this.changeLoc({
                        latitude: item.latitude,
                        longitude: item.longitude
                    })
                }}
            />
        );
    }
    render() {
        let markers = this.props.markers
        let height = this.state.height
        if (height < 25)
            height = 25
        else if (height > defaultHeight + 101)
            height = defaultHeight + 101
        return (
            <View style={[styles.container, {top: height}]} >
                <View
                    {...this.panResponder.panHandlers}
                    style={styles.sliderBtn}
                >
                    <Image style={styles.draggableIcon} source={draggableIcon} />
                </View>
                <View style={styles.sliderBar} />
                <FlatList
                    style={styles.flatList}
                    data={markers}
                    renderItem={({item}) => this.renderItem(item)}
                    keyExtractor={(item, _id) => _id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    sliderBtn: {
        position: 'relative',
        zIndex: 3,
        height: 50,
        width: 50,
        bottom: -25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'grey',
    },
    sliderBar: {
        height: 25,
        width: '100%',
        backgroundColor: 'rgba(65,65,65,0.5)',
    },
    draggableIcon: {
        resizeMode: 'center'
    },
    flatList: {
        flexDirection: 'column',
        zIndex: 2,
        width: '100%',
        backgroundColor: 'white',
    },
});

const mapStateToProps = state => ({
    region: state.homeApp.region,
});
const mapDispatchToProps = dispatch => {
    return {
        onRegionChange: region => {
            dispatch(regionChange(region))
        }
    }
}
const MapFooter = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default MapFooter;