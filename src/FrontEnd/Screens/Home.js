import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../Components/Home/Header";
import ListofHotels from "../Components/Home/ListOfHotel/ListofHotels";
import HotDeals from "../Components/Home/HotDeals/HotDeals";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

import { useRoute } from "@react-navigation/native";

const Home = ({ navigation }) => {
  // TYPE OF TRIP STATE
  const [typeOfTrip, typeOfTripF] = useState("roundTrip");

  // GET ROUTE PARAMS FROM SEARCH DESTINATION

  const route = useRoute();

  // Date RANge
  const [selectedDate, setSelectedDate] = useState("");

  const customButton = (onConfirm) => (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: "80%", marginHorizontal: "3%" },
        text: { fontSize: 20 },
      }}
      primary
      title={"Submit"}
    />
  );

  // ROOMS, ADULTS & CHILDREN STATE

  // MODAL
  const [modalVisiblle, setmodalVisiblle] = useState(false);

  //STATES
  const [rooms, setrooms] = useState(1);
  const [adults, setadults] = useState(1);
  const [children, setchildren] = useState(0);

  // FUNCTION TO CHECK IF ALL DATA HAS BEEN SELECTED

  const navigateToPlaces = () => {
    if (!route.params && !selectedDate) {
      Alert.alert("Invalid Details", "Please enter all details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (route.params && selectedDate) {
      navigation.navigate("Places", {
        selectedDate,
        children,
        adults,
        rooms,
        place: route.params.input,
      });
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" bg-black p-4">
          <Header />

          <View className="w-full h-[1px] bg-[#4b4b4b]"></View>

          <View className="my-5 mb-20">
            <Text className="text-[#fdfdfd] text-3xl">
              Discover new places.
            </Text>
            <Text className="text-[#9b9b9b] text-[14px] ">
              Explore, Journey, Discover, Adventure.
            </Text>
          </View>
        </View>
        <View className="bg-[#eaebf3] p-4">
          <View className="rounded-xl  w-full bg-white p-2 mt-[-80px]">
            <View className="flex flex-row justify-between mt-2 px-2">
              <TouchableOpacity
                onPress={() => typeOfTripF("oneTrip")}
                className={`py-1.5 px-3 border-[#e8e8e8] border-[1px]  rounded-full ${
                  typeOfTrip === "oneTrip" && "bg-[#c7de99] border-[#c7de99]"
                }`}
              >
                <Text
                  className={` ${
                    typeOfTrip === "oneTrip" && "font-bold text-black"
                  }  text-[13px]  `}
                >
                  One Way
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => typeOfTripF("roundTrip")}
                className={`py-1.5 px-3 border-[#e8e8e8] border-[1px]  rounded-full ${
                  typeOfTrip === "roundTrip" && "bg-[#c7de99] border-[#c7de99]"
                }`}
              >
                <Text
                  className={` ${
                    typeOfTrip === "roundTrip" && "font-bold text-black"
                  }  text-[13px]  `}
                >
                  Round Trip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => typeOfTripF("Muiticity")}
                className={`py-1.5 px-3 border-[#e8e8e8] border-[1px]  rounded-full ${
                  typeOfTrip === "Muiticity" && "bg-[#c7de99] border-[#c7de99]"
                }`}
              >
                <Text
                  className={` ${
                    typeOfTrip === "Muiticity" && "font-bold text-black"
                  }  text-[13px]  `}
                >
                  Muiticity
                </Text>
              </TouchableOpacity>
            </View>

            <View className="p-2 my-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Search")}
                className="border-[#e8e8e8] border-[1px]  rounded-lg flex flex-row items-center p-2  mt-1 mb-2"
              >
                <Image
                  className="h-6 w-5 mr-3"
                  source={require("../../../assets/home.png")}
                />
                <View>
                  <Text className="text-[#c0bfbf] text-xs ">
                    Your Destination
                  </Text>
                  <Text
                    className={`${
                      route.params
                        ? "text-[#000] font-semibold "
                        : "text-[#c0bfbf] "
                    }  "text-[13px] "`}
                  >
                    {route.params
                      ? route.params.input
                      : "Enter your destination e.g Paris"}
                  </Text>
                </View>
              </TouchableOpacity>
              <View className="border-[#e8e8e8] border-[1px]  rounded-lg flex flex-row items-center p-2 mb-2  mt-1">
                <Image
                  className="h-6 w-5 mr-3"
                  source={require("../../../assets/calender.png")}
                />
                <View>
                  <Text className="text-[#c0bfbf] text-xs mb-[-3px]">
                    Select your Date
                  </Text>
                  <DatePicker
                    style={{ height: 30, borderRadius: 0, borderWidth: 0 }}
                    customStyles={{
                      placeholderText: { fontSize: 12 },

                      headerStyle: {
                        backgroundColor: "black",
                      },

                      contentText: {
                        fontSize: 13,
                        fontWeight: "500",
                      },
                    }}
                    customButton={(onConfirm) => customButton(onConfirm)}
                    onConfirm={(startDate, endDate) =>
                      setSelectedDate(startDate, endDate)
                    }
                    centerAlign
                    placeholder={"Apr 27, 2018 - Jul 10, 2018"}
                    mode={"range"}
                  />
                </View>
              </View>
              <View className="border-[#e8e8e8] border-[1px]  rounded-lg flex flex-row items-center p-2  mt-1">
                <Image
                  className="h-6 w-5 mr-3"
                  source={require("../../../assets/person.png")}
                />

                <TouchableOpacity
                  onPress={() => setmodalVisiblle(!modalVisiblle)}
                >
                  <Text className="font-semibold">
                    {rooms} room - {adults} adults - {children} children
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigateToPlaces()}
                className=" bg-black p-3 rounded-full  mt-3"
              >
                <Text className=" text-white text-center">Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ListofHotels />
        <HotDeals />
      </ScrollView>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setmodalVisiblle(!modalVisiblle)}
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
              onPress={() => setmodalVisiblle(!modalVisiblle)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle
            textStyle={{ fontSize: 13 }}
            title="Select rooms and guests"
          />
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setmodalVisiblle(!modalVisiblle)}
        onTouchOutside={() => setmodalVisiblle(!modalVisiblle)}
        visible={modalVisiblle}
      >
        <ModalContent style={{ height: 200 }}>
          <View className="my-2">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold">Rooms</Text>

              <View className="flex-row gap-2 items-center">
                <TouchableOpacity
                  onPress={() => setrooms(rooms + 1)}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">+</Text>
                </TouchableOpacity>
                <Text className="text-base">{rooms}</Text>
                <TouchableOpacity
                  onPress={() => setrooms(Math.max(1, rooms - 1))}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="my-2">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold">Adults</Text>

              <View className="flex-row gap-2 items-center">
                <TouchableOpacity
                  onPress={() => setadults(adults + 1)}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">+</Text>
                </TouchableOpacity>
                <Text className="text-base">{adults}</Text>
                <TouchableOpacity
                  onPress={() => setadults(Math.max(1, adults - 1))}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="my-2">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold">children</Text>

              <View className="flex-row gap-2 items-center">
                <TouchableOpacity
                  onPress={() => setchildren(children + 1)}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">+</Text>
                </TouchableOpacity>
                <Text className="text-base">{children}</Text>
                <TouchableOpacity
                  onPress={() => setchildren(Math.max(0, children - 1))}
                  className="bg-black py-1 px-4 rounded-lg"
                >
                  <Text className="text-white text-lg font-semibold">-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});
