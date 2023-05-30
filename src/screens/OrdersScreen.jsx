import { FlatList, StyleSheet, View } from 'react-native'
import { deleteOrder, getOrders } from '../store/actions';
import { useDispatch, useSelector } from "react-redux";

import OrderItem from '../components/OrderItem';
import React from 'react'
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const OrdersScreen = () => {
  
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  
  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );
    const renderOrderItem = ({ item }) => (
      <OrderItem item={item} onDelete={handleDeleteOrder} />
    );
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item =>item.id}
        renderItem={renderOrderItem}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})