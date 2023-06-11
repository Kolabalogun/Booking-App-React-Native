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
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import SearchResults from "../Components/Search/SearchResults";
import Header from "../Components/Search/Header";
import { data } from "../Components/Search/Data";
import HotDealCard from "../Components/Home/HotDeals/HotDealCard";

import { useRoute } from "@react-navigation/native";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const Places = () => {
  const route = useRoute();

  const searchPlaces = data?.filter(
    (item) => item.place === route.params?.place
  );

  const [sortedData, setsortedData] = useState(data);

  const [modalVisible, setmodalVisiblle] = useState(false);
  const [selectedFilter, setselectedFilter] = useState([]);

  // SORT ARRAY

  const filter = [
    {
      id: 0,
      filter: "Cost:  Low to High",
    },
    {
      id: 1,
      filter: "Cost:  High to Low",
    },
  ];

  // LOW TO HIGH SORT COMPARISON

  const LtH = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }
    if (a.newPrice > b.newPrice) {
      return 1;
    }
    return 0;
  };

  // HIGH TO LOW SORT COMPARISON

  const HtL = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }
    if (a.newPrice < b.newPrice) {
      return 1;
    }
    return 0;
  };

  const applySort = (selectedFilter) => {
    setmodalVisiblle(false);

    switch (selectedFilter) {
      case "Cost:  Low to High":
        searchPlaces.map((val) => val.properties.sort(LtH));
        setsortedData(searchPlaces);
        break;

      case "Cost:  High to Low":
        searchPlaces.map((val) => val.properties.sort(HtL));
        setsortedData(searchPlaces);
        break;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#eaebf3] ">
      <Header
        setmodalVisiblle={setmodalVisiblle}
        SearchResults={searchPlaces}
        title="Popular Hotels"
      />

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

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setmodalVisiblle(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              textStyle={{ color: "white", fontSize: 13 }}
              style={{
                marginBottom: 20,

                backgroundColor: "black",
              }}
              onPress={() => applySort(selectedFilter)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle textStyle={{ fontSize: 13 }} title="Sort and Filter" />
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setmodalVisiblle(!modalVisible)}
        onTouchOutside={() => setmodalVisiblle(!modalVisible)}
        visible={modalVisible}
      >
        <ModalContent style={{ height: 120 }}>
          <View className="my-2 gap-1">
            <Text className="font-semibold">Sort</Text>

            {filter.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setselectedFilter(item.filter)}
                className="flex-row gap-3"
              >
                <View onPress={() => setselectedFilter(item.filter)}>
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="black" />
                  ) : (
                    <FontAwesome name="circle-o" size={18} color="black" />
                  )}
                </View>
                <Text>{item.filter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default Places;
