import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import CategoriesItem from "../components/CategoriesItem";
import React from "react";
import { selectCategory } from '../store/actions';

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", { name: item.title });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
