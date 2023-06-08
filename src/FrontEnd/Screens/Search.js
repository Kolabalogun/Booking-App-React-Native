import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchResults from "../Components/Search/SearchResults";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView className="flex-1 p-4">
      <View className=" items-center bg-[#e8e8e8] flex-row border-[#9e9e9e] border-[1px]  p-2 rounded-md">
        <TextInput
          className=" flex-1 "
          onChangeText={(e) => setInput(e)}
          value={input}
          placeholder="Search Places..."
        />

        <AntDesign name="search1" size={22} color="black" />
      </View>

      <SearchResults input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default Search;
