import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Header = ({ title }) => {
  const navigation = useNavigation();

  const [typeOfTrip, typeOfTripF] = useState("roundTrip");
  return (
    <View className="mb-2">
      <View className="flex bg-black justify-between items-center p-4 flex-row ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="border-[1px] border-[#4b4b4b] p-3 rounded-full"
        >
          <Image
            className="h-5 w-5"
            source={require("../../../../assets/arrowback.png")}
          />
        </TouchableOpacity>

        <View className="flex gap-1">
          <Text className="text-[#c8c8c8] font-medium text-2xl">
            {title ? title : "Discover"}
          </Text>
        </View>

        <TouchableOpacity className="border-[1px] border-[#000] p-3 rounded-full">
          <Image
            className="h-5 w-5"
            // source={require("../../../../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
      {title && (
        <View>
          <View className="flex flex-row justify-between my-2 px-2">
            <TouchableOpacity
              onPress={() => typeOfTripF("roundTrip")}
              className={`py-1.5 px-4 border-[#e8e8e8] border-[1px]  rounded-full flex-row items-center justify-center gap-1 `}
            >
              <MaterialIcons name="sort" size={18} color="black" />
              <Text className="font-bold text-black text-[13px]  ">Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => typeOfTripF("oneTrip")}
              className={`py-1.5 px-4 border-[#e8e8e8] border-[1px]  rounded-full flex-row items-center justify-center gap-1`}
            >
              <Ionicons name="filter" size={18} color="black" />
              <Text className={`  text-[13px]  font-bold text-black`}>
                Filter
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => typeOfTripF("Muiticity")}
              className={`py-1.5 px-4 border-[#e8e8e8] border-[1px]  rounded-full flex-row items-center gap-0.5`}
            >
              <Entypo name="location-pin" size={18} color="black" />
              <Text className={`   font-bold text-black  text-[13px]  `}>
                Map
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View className="w-full h-[1px] bg-[#4b4b4b]"></View>
    </View>
  );
};

export default Header;
