import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Login from "../Authentication/Login";
import Search from "../FrontEnd/Screens/Search";
import Places from "../FrontEnd/Screens/Places";
import Map from "../FrontEnd/Screens/Map";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Places" component={Places} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Navigations;
