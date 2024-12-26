import { View, Text } from "react-native";
import React, { useRef } from "react";
import MapView from "react-native-maps";

const Map = ({ route }) => {
  console.log(route.params);

  const mapView = useRef(null);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapView}
        className="flex-1"
      ></MapView>
    </View>
  );
};

export default Map;
