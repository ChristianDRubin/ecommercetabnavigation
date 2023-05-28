import { Button, Image, StyleSheet, Text, View } from "react-native";

import {COLORS} from '../constants/colors';
import React from "react";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
  const product = useSelector(state=>state.products.selected);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
        <Image style={styles.image} source={{ uri: product.img }}/>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to cart" color={COLORS.primaryDark} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: COLORS.text,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    height: "55%",
  },
  image: {
    width: "50%",
    height: "50%",
  },
  textContainer: {
    height: "50%",
  },
});
