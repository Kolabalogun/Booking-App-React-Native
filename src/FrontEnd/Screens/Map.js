import { View, Text } from "react-native";
import React from "react";

const Map = ({ route }) => {
  console.log(route.params);

  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;
