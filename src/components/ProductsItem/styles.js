import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
     shadowOffset: { width: 0, height: 1 },
     shadowRadius: 10,
    //  elevation: 1,
    alignContent:'center',
  },
  imageContainer: {
    height: "55%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    height: "80%",
  },
});

export default styles;
