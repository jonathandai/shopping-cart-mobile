import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Button, Text, withTheme, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native-elements';
import Size from './Size'

export default class Products extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photo: props.photo,
            name: props.name,
            price: props.price,
            sku: props.sku,
            style: props.style, 
            size: props.size,
            
            currentCart: props.currentCart
        }
    }

 

    render() {
        return (
            <View>
                <Card
                    containerStyle={{ padding: 0, marginBottom: 15 }}
                    image={{ uri: this.props.photo }}
                    imageStyle={styles.image}
                    imageWrapperStyle={{marginTop: 10}}>
  
                    <Text style={styles.productName}>{this.props.name}</Text>

                <View style={styles.sizeSelector}>

                <Size size={this.state.size}></Size>

                </View>

                    <Button
                        icon={<Icon color='#ffffff' />}
                        onPress = {() => this.props.updateCurrentCart(this.state.name)}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Add to Cart' />

                </Card>
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
    image:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 220,
    },
    sizeSelector:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 15,
    },
    sizeContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeText:{
        fontSize: 30
    },
    sizeButton:{
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        width: 50,
        height: 40,
        marginRight: 12
    },
    productName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
