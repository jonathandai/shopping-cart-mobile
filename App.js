import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Button, Text, withTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Card } from 'react-native-elements';
import ProductData from './product-info/product-test.json'
import Product from './Components/Product'
import Cart from './Components/Cart'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shoppingData: [],
      currentCart: [],
      showCart: false,
      // cartTotal: 0,
    }
    this.toggleCart = this.toggleCart.bind(this)
  }


  componentWillMount() {
    this.fetchProductData();
    console.disableYellowBox = true;
  }

  fetchProductData = async () => {
    this.setState({ shoppingData: ProductData });
  }

  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart
    })
    console.log(this.state.showCart)
  }

  updateCurrentCart = (name) => {
    if(!this.state.currentCart.includes(name))
    {
      var newCart = this.state.currentCart.slice();    
      newCart.push(name);   
      this.setState({currentCart: newCart})
      console.log(this.state.currentCart)
    }
}

deleteCartItem= (name) => {
      var newCart = this.state.currentCart.slice();    
      var index = newCart.indexOf(name)
      if (index !== -1) {
        newCart.splice(index, 1);
        this.setState({currentCart: newCart});
      }
}

  render() {
    return (
      <View style={styles.container}>

        {/* <Text>{this.state.cartTotal}</Text> */}

        <Cart   
        showCart={this.state.showCart}
        currentCart={this.state.currentCart}
        toggleCart={this.toggleCart}
        deleteCartItem={this.deleteCartItem}>
        </Cart>

        <Header
          leftComponent={<Button
            icon={{
              name: "menu",
              color: "white"
            }} />}
          centerComponent={{ text: 'Shopping Cart', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          rightComponent={<Button
            onPress={() => this.toggleCart()}
            icon={{
              name: "shopping-cart",
              color: "white"
            }} />}
        />

        <FlatList
          containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
          // ItemSeparatorComponent={this.renderSeparator}
          data={this.state.shoppingData}
          keyExtractor={(item, index) => item.text}
          renderItem={({ item }) => <Product name={item.name} photo={item.url} price={item.price} style={item.style} size={item.size}
          currentCart={this.state.currentCart} updateCurrentCart={this.updateCurrentCart} ></Product>}>
        </FlatList>
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
});
