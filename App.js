/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    CallAPI redux Saga
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>ID</Text>
                    <TextInput
                    style={{width:300}}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Name</Text>
                    <TextInput
                        style={{width:300}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>AGE</Text>
                    <TextInput
                        style={{width:300}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {

                    }} style={{marginLeft:10,backgroundColor:'red',width:50,height:30}}><Text>GET</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }} style={{marginLeft:10,backgroundColor:'green',width:50}}><Text>POST</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }} style={{marginLeft:10,backgroundColor:'blue',width:50}}><Text>PUT</Text></TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }} style={{marginLeft:10,backgroundColor:'yellow',width:50}}><Text>DELETE</Text></TouchableOpacity>

                </View>
                <FlatList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
