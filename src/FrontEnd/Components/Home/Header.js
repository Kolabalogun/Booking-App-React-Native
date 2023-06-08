import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import * as Location from "expo-location";

const Header = () => {
  // GET CURENT DATE

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${dayOfWeek}, ${day} ${month}, ${year}`;

  // GET CURRENT LOCATION

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // Get the current location
      let { coords } = await Location.getCurrentPositionAsync({});

      setLocation(coords);

      // Reverse geocode to get the address information
      let addressResponse = await Location.reverseGeocodeAsync(coords);
      setAddress(addressResponse[0]);
    })();
  }, []);

  let text = "Waiting..";
  let sstate = "";
  if (errorMsg) {
    text = "Your Location";
  } else if (location) {
    text = address?.city;
    sstate = address?.region;
  }

  return (
    <View className="flex justify-between items-center flex-row mb-7">
      <TouchableOpacity className="border-[1px] border-[#4b4b4b] p-3 rounded-full">
        <Image
          className="h-5 w-5"
          source={require("../../../../assets/menu.png")}
        />
      </TouchableOpacity>

      <View className="flex gap-1">
        <Text className="text-[#c8c8c8]">{formattedDate}</Text>
        <View className="flex item-center justify-center flex-row ">
          <View>
            <Image
              className="h-3 w-3 mr-1 mt-0.5"
              source={require("../../../../assets/location.png")}
            />
          </View>

          <Text className="text-[#797878]">
            {text}, {sstate}
          </Text>
        </View>
      </View>

      <TouchableOpacity className="border-[1px] border-[#4b4b4b] p-3 rounded-full">
        <Image
          className="h-5 w-5"
          source={require("../../../../assets/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
