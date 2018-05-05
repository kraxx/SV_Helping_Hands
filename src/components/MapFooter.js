import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList, TouchableOpacity, PanResponder } from 'react-native';
import { connect } from 'react-redux';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ListItem from './ListItem';
import getVisibleMarkers from '../lib/getMarkers';
import { regionChange } from '../actions';

const defaultHeight = Dimensions.get('window').height - 150;

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
        let markers = getVisibleMarkers(this.props.markers, this.props.filters);
        let height = this.state.height
        console.log(height)
        if (height > defaultHeight)
            height = defaultHeight
        return (
            <View style={[styles.container, {top: height}]} >
                <View
                    {...this.panResponder.panHandlers}
                    style={styles.sliderBar}
                >
                    <Text style={{textAlign: 'center'}}>DRAG ME</Text>
                </View>
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
    },
    sliderBar: {
        height: 20,
        width: '100%',
        backgroundColor: 'red',
    },
    flatList: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
    },
});

const mapStateToProps = state => ({
    markers: state.homeApp.markers,
    region: state.homeApp.region,
    filters: state.filterSettings.selected
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