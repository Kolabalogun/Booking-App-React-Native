import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

const HotelCard = ({ image, rating, name, location, pricePerNight }) => {
  return (
    <TouchableOpacity className="w-36 h-40 mr-3 mt-3 ">
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, borderRadius: 10 }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View
          className=""
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: 10,
            padding: 5,
            justifyContent: "flex-end",
          }}
        >
          <View>
            <Text className="text-white font-semibold">{name}</Text>

            <View className="flex flex-row items-center ">
              <Image
                className="h-3 w-3 mr-1 mt-0.5"
                source={require("../../../../../assets/location-pin.png")}
              />

              <Text className="text-[#e2e3e6] text-xs font-semibold">
                {location}
              </Text>
            </View>

            <View className="flex flex-row justify-between">
              <View className="flex flex-row">
                <Text className="text-white font-semibold">
                  {pricePerNight}
                </Text>
                <Text className="text-white text-xs">/night</Text>
              </View>
              <View className="flex flex-row">
                <Image
                  className="h-3 w-3 mr-1"
                  source={require("../../../../../assets/star.png")}
                />
                <Text className="text-white text-xs">{rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HotelCard;
