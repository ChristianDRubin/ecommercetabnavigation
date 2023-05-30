import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { confirmCart, removeFromCart } from '../store/actions';
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import React from "react";

const CartScreen = () => {

   const dispatch = useDispatch();
   const items = useSelector(state => state.cart.items);
   const total = useSelector(state => state.cart.total);

   const handleDeleteCartItem = (id) =>{
    dispatch(removeFromCart(id));
   };

  const handleCreateOrder = () => {
    dispatch(confirmCart(items, total));
  };
  const renderCartItem = ({ item }) => (
      <CartItem item={item} onDelete={handleDeleteCartItem} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleCreateOrder}>
          <Text>Confirmar</Text>
          <View style={styles.totalPrice}>
            <Text>Total:${total}</Text>
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