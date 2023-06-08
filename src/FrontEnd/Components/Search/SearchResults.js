import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { data } from "./Data";

import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ input, setInput }) => {
  const navigation = useNavigation();

  return (
    <View className="   mx-4">
      <Text className="text-xl mb-2 font-bold">Places</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            return (
              <TouchableOpacity
                onPress={() => {
                  setInput(item.place);

                  navigation.navigate("Home", {
                    input: item.place,
                  });
                }}
                className="flex-row items-center mb-3 rounded-lg bg-[#f0f4f7] p-2 "
              >
                <Image
                  source={{ uri: item.placeImage }}
                  className="h-14 w-14 rounded-lg mr-3"
                />
                <View className="gap-0.5">
                  <Text className="font-medium">{item.place}</Text>
                  <Text>{item.shortDescription}</Text>
                  <Text className="text-gray-500 text-[13px]">
                    {item.properties.length} Properties
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;
