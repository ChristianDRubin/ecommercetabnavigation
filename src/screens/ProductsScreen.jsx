import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { filterProducts, selectProduct } from '../store/actions';
import { useDispatch, useSelector } from "react-redux";

import ProductsItem from "../components/ProductsItem";

const ProductsScreen = ({ navigation }) => {

  const filteredProducts = useSelector(
     state => state.products.filteredProducts
  );

  const category = useSelector(state=>state.category.selected);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);
  
  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Details", {
      product: item,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct} />
    </View>
  );



  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    margin: 15,
    height: 300,
    width: 150,
  },
});
