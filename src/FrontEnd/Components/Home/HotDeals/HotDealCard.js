import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const HotDealCard = ({
  image,
  rating,
  name,
  location,
  pricePerNight,
  discount,
  imageUrl,
}) => {
  return (
    <TouchableOpacity className="h-48 mt-3 mb-4 ">
      <ImageBackground
        source={imageUrl ? { uri: imageUrl } : image}
        resizeMode="cover"
        style={{ flex: 1, borderRadius: 10 }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View
          className="flex-1 p-2 py-3"
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: 10,
            padding: 5,
            justifyContent: "space-between",
          }}
        >
          <View className="justify-between flex-row items-center">
            <View className="rounded-full p-1 bg-[#ff8a64] w-16 flex items-center">
              <Text className="text-white font-semibold">{discount}</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="hearto" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <View className="gap-1 ">
            <View className="flex justify-between items-center flex-row ">
              <Text className="text-white font-semibold">{name}</Text>

              <View className="flex flex-row">
                <Image
                  className="h-3 w-3 mr-1"
                  source={require("../../../../../assets/star.png")}
                />
                <Text className="text-white text-xs">{rating}</Text>
              </View>
            </View>

            <View className="flex flex-row items-center justify-between ">
              <View className="flex flex-row items-center  ">
                <Image
                  className="h-3 w-3 mr-1 mt-0.5"
                  source={require("../../../../../assets/location-pin.png")}
                />

                <Text className="text-[#e2e3e6] text-xs font-semibold">
                  {location}
                </Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-white font-semibold">
                  {pricePerNight}
                </Text>
                <Text className="text-white text-xs">/night</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HotDealCard;

const styles = StyleSheet.create({});
