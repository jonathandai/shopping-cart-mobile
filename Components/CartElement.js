import React from 'react';
import { Modal, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class CartElement extends React.Component {
    constructor(props){
      super(props)
    
      this.state={
         name: props.name
      }

      this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete= () => {
        this.props.deleteCartItem(this.state.name)
        this.props.renderCart()
    }

render(){
    return (
        <View style={styles.container}>
        <TouchableOpacity
        style = {styles.button}
        activeOpacity= {1.0}>

            <Button 
            onPress={() => this.handleDelete()}
            title='delete'></Button>

             <Text style={styles.taskName}> {this.state.name} </Text>

        </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    button: {
        backgroundColor: 'rgba(256,256,256,1.0)',
        marginBottom: 3,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#F0F7FC',
        width:'100%',
        flexDirection: "row",
        justifyContent: 'flex-start',
      },
    taskName: {
        marginTop: 6,
        fontSize: 20,
        textAlign:'left',
        fontWeight: 'bold'
    }
  });
