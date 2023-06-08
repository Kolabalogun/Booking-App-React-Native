import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ListOfHotelsData } from "../HotelData";
import HotelCard from "./HotelCard";

const ListofHotels = () => {
  return (
    <View className="p-2  bg-[#eaebf3]">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold">Popular Hotels</Text>

        <TouchableOpacity>
          <Text className="font-semibold">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {ListOfHotelsData.map((hotel, idx) => (
          <HotelCard
            image={hotel.image}
            key={idx}
            name={hotel.hotelName}
            location={hotel.location}
            pricePerNight={hotel.pricePerNight}
            rating={hotel.rating}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListofHotels;
