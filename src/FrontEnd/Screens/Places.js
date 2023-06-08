import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchResults from "../Components/Search/SearchResults";
import Header from "../Components/Search/Header";
import { data } from "../Components/Search/Data";
import HotDealCard from "../Components/Home/HotDeals/HotDealCard";

import { useRoute } from "@react-navigation/native";

const Places = () => {
  const route = useRoute();
  return (
    <SafeAreaView className="flex-1 bg-[#eaebf3] ">
      <Header title="Popular Hotels" />

      <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
        {data
          ?.filter((item) => item.place === route.params?.place)
          .map((item) =>
            item.properties.map((property, idx) => (
              <HotDealCard
                imageUrl={property.image}
                key={idx}
                name={property.name}
                location={property.location}
                pricePerNight={property.newPrice}
                rating={property.rating}
                discount={property.discount}
              />
            ))
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Places;
