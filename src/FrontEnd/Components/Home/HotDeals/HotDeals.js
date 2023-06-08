import { View, Text } from "react-native";
import React from "react";

import { HotDealsData } from "../HotelData";
import HotDealCard from "./HotDealCard";

const HotDeals = () => {
  return (
    <View className="p-2  bg-[#eaebf3] mt-2">
      <Text className="text-xl font-bold">Hot Deals</Text>

      {HotDealsData.map((hotel, idx) => (
        <HotDealCard
          image={hotel.image}
          key={idx}
          name={hotel.hotelName}
          location={hotel.location}
          pricePerNight={hotel.pricePerNight}
          rating={hotel.rating}
          discount={hotel.discount}
        />
      ))}
    </View>
  );
};

export default HotDeals;
