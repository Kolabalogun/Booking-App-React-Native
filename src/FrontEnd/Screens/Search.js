import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchResults from "../Components/Search/SearchResults";
import Header from "../Components/Search/Header";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-[#eaebf3] ">
      <Header />

      <View className=" items-center mx-4 bg-[#f9f9f9] flex-row border-[#d1cece] border-[1px]  p-2 rounded-md">
        <AntDesign name="search1" size={18} color="black" />
        <TextInput
          className=" ml-3 flex-1 "
          onChangeText={(e) => setInput(e)}
          value={input}
          placeholder="Search destination..."
        />
      </View>

      <View className="mx-4">
        <TouchableOpacity className="h-48 mt-4 mb-4 ">
          <ImageBackground
            source={require("../../../assets/ekohotel.png")}
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
              <View className="rounded-full p-1 bg-[#ff8a64] w-16 flex items-center">
                <Text className="text-white font-semibold">25% OFF</Text>
              </View>
              <View className="gap-1 ">
                <View className="flex justify-between items-center flex-row ">
                  <Text className="text-white font-semibold">
                    Eko Hotel & Suites
                  </Text>

                  <View className="flex flex-row">
                    <Image
                      className="h-3 w-3 mr-1"
                      source={require("../../../assets/star.png")}
                    />
                    <Text className="text-white text-xs">4.0</Text>
                  </View>
                </View>

                <View className="flex flex-row items-center justify-between ">
                  <View className="flex flex-row items-center  ">
                    <Image
                      className="h-3 w-3 mr-1 mt-0.5"
                      source={require("../../../assets/location-pin.png")}
                    />

                    <Text className="text-[#e2e3e6] text-xs font-semibold">
                      Lagos, Nigeria
                    </Text>
                  </View>
                  <View className="flex flex-row">
                    <Text className="text-white font-semibold">$499</Text>
                    <Text className="text-white text-xs">/night</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <SearchResults input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default Search;
