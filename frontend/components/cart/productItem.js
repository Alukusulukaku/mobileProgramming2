import { Icon, Input, Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const TrashcanIcon = (props) => (
  <Icon {...props} style={[props.style]} name="trash-can" pack="MCI" />
);
const MinusIcon = (props) => (
  <Icon {...props} style={[props.style]} name="minus" pack="fa5" />
);
const PlusIcon = (props) => (
  <Icon {...props} style={[props.style]} name="plus" pack="fa5" />
);

export default function productItem() {
  const [test, setTest] = useState(1);
  const PlusHandler = () => {
    setTest(test + 1);
  };
  const MinusHandler = () => {
    setTest(test - 1 > 0 ? test - 1 : test);
  };
  return (
    <Layout
      level="1"
      style={{
        width: "100%",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        elevation: 5,
        shadowColor: "#000",
        overflow: "hidden",
      }}
    >
      <Layout level="1" style={{ flex: 0.35, width: 120, height: 120 }}>
        <ImageBackground
          style={{
            backgroundColor: "#f0f0f0",
            overflow: "hidden",
            flex: 1,
          }}
          imageStyle={{ marginVertical: 7 }}
          source={{
            uri: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          }}
          resizeMode="contain"
        >
          <Text
            style={{
              backgroundColor: "#ff6f69",
              alignSelf: "flex-start",
              color: "white",
              fontWeight: "bold",
              fontSize: 13,
              borderRadius: 15,
              paddingVertical: 2,
              paddingHorizontal: 4,
              marginVertical: 7,
              marginHorizontal: 10,
            }}
          >
            {" "}
            -15%
          </Text>
        </ImageBackground>
      </Layout>
      <View
        style={{
          flex: 0.6,
          flexDirection: "column",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <View style={{ flex: 0.4, flexDirection: "row" }}>
          <Text
            category="h6"
            numberOfLines={2}
            style={{ color: "#4a4a4a", flex: 0.9, marginRight: 4 }}
          >
            gfdssssssssdsaaaaaaaaaaaaaaaaaaassssssssdasdsadsa
          </Text>
        </View>
        <View
          style={{ flex: 0.55, flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={MinusHandler}
            activeOpacity={0.7}
            style={{
              backgroundColor: "#ffff",
              padding: 10,
              borderRadius: 50,
              elevation: 5,
              overflow: "hidden",
              shadowColor: "#000",
            }}
          >
            <MinusIcon style={{ width: 18, height: 18, color: "#757575" }} />
          </TouchableOpacity>
          <Input
            size="small"
            textStyle={{
              fontWeight: "bold",
              color: "#575757",
              width: 15,
              textAlign: "center",
              fontSize: 15,
            }}
            style={{
              marginHorizontal: 7,
              paddingHorizontal: -5,
              borderColor: "#fff",
              backgroundColor: "#fff",
            }}
            disabled={true}
            value={test.toString()}
            onChangeText={(e) => setTest(e)}
          />
          <TouchableOpacity
            onPress={PlusHandler}
            activeOpacity={0.7}
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 50,
              elevation: 5,
              shadowColor: "#000",
              overflow: "hidden",
            }}
          >
            <PlusIcon style={{ width: 18, height: 18, color: "#757575" }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.15, paddingRight: 15 }}>
        <TouchableOpacity
          style={{
            flex: 0.05,
            marginVertical: 6,
            alignItems: "center",
            alignSelf: "flex-end",
          }}
        >
          <TrashcanIcon style={{ width: 26, height: 26, color: "#ff6f69" }} />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text category="s1" style={{ fontWeight: 700, color: "#545454" }}>
            100$
          </Text>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
