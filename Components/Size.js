import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Alert, Image, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Button, Text, withTheme, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';

export default class Products extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            size: props.size,
        }
    }

    render() {
        return (

            <View style={styles.sizeSelector}>
                <FlatList
                    listKey={(item) => item}
                    data={this.props.size}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.sizeButton}>
                            <View style={styles.sizeContainer}>
                                <Text style={styles.sizeText}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 220,
    },
    sizeSelector: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1, 
        marginBottom: 15,
        
    },
    sizeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText: {
        fontSize: 30
    },
    sizeButton: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        width: 50,
        height: 40,
        marginRight: 12,
        marginBottom: 5
    },
    productName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
