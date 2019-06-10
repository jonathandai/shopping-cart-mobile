import React, { Component } from 'react';
import { StyleSheet, FlatList, Modal, Text, View, Alert, Image, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import Products from './Product'
import CartElement from './CartElement.js'


export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCart: props.showCart,
            currentCart: props.currentCart
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showCart !== this.state.showCart) {
            this.setState({ showCart: !this.state.showCart })
        }
        if (nextProps.currentCart !== this.state.currentCart) {
            this.setState({ currentCart: this.state.currentCart })
        }
    }

    renderCart= () => {
        this.forceUpdate()
    }

    renderSeparator = () => (
        <View
          style={{
            backgroundColor: '#696969',
            height: 1,
          }}
        />
      );


    render() {
        return (
            <View style={styles.modal}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showCart}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={styles.modal}>
                        <Text style={styles.cartText}>Your Cart:</Text>

                            <FlatList
                                ItemSeparatorComponent={this.renderSeparator}
                                data = {this.props.currentCart}
                                renderItem={({ item }) => <CartElement renderCart={this.renderCart} deleteCartItem={this.props.deleteCartItem} name={item}></CartElement>}
                            />
                            <TouchableOpacity
                                style={styles.cancelButton}
                                activeOpacity={.7}
                                onPress={() => { this.props.toggleCart() }}>
                                <Text style={styles.cancelText}>Close</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cartText:{
        fontSize: 30,
        fontWeight: 'bold', 
        marginBottom: 20,
        marginLeft: 5,
        marginTop: 20,
        color: '#696969'
    },
    modal: {
        position: 'absolute',
        top: 100,
        // left: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F0F7FC',
        width: '90%',
        height: '80%',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 5, },
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        paddingBottom: 20
    },
    cancelText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cancelButton: {
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#1F89DC',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#1F89DC',
        shadowOffset: { width: 0, height: 5, },
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOpacity: .1,
    },
});