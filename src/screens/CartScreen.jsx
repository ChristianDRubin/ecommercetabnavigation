import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
import React from "react";

const CartScreen = ({ navigation }) => {
   const handleDeleteCartItem = (id) =>{
    console.log(id)
   };
  // const handleDeleteCartItem = item => {
  //   navigation.navigate("Products", {
  //     categoryId: item.id,
  //     name: item.title,
  //   });
  // };

  const renderCartItem = ({ item }) => (
      <CartItem item={item} onDelete={handleDeleteCartItem} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={()=> console.log("Hi")}>
          <Text>Confirmar</Text>
          <View style={styles.totalPrice}>
            <Text>Total: $100</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor: "#fff",
  },
  list:{
    flex:3
  },
  footer:{
    flex:1,
    padding:10,
    borderTopColor:'#ccc',
    borderTopWidth:1
  },
  confirm:{
    backgroundColor: '#ccc',
    borderRadius:8,
    padding:8,
    alignItems:'center',
    justifyContent:'space-between'
  },
  totalPrice:{
    fontSize:18
  }
});