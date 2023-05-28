import OrderScreen from "../screens/OrdersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Orders"
       component={OrderScreen}
       options={{title: "Ordenes"}} 
       />
    </Stack.Navigator>
  );
};
