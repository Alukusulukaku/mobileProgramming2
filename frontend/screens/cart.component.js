import {
  Button,
  Divider,
  Icon,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProductItem from "../components/cart/productItem";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../context/UserProvider";

const BackIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 32, height: 32 }]}
    name="arrow-back"
    pack="eva"
  />
);

const ApplyCouponBtn = () => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{
      backgroundColor: "#88D8B0",
      paddingHorizontal: 20,
      marginVertical: 5,
      paddingVertical: 7,
      borderRadius: 7,
      elevation: 2,
      shadowColor: "#575757",
    }}
  >
    <Text style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>Apply</Text>
  </TouchableOpacity>
);

export default function CartScreen({ navigation }) {
  const { token } = useAuth();
  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          const cartItems = await AsyncStorage.getItem("cart");
          if (cartItems !== null) {
            alert(JSON.parse(cartItems));
            console.log(JSON.parse(cartItems));
          }
        } catch (e) {
          alert(e);
        }
      };
      getData();
    }, [])
  );
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const navigateBack = () => {
    navigation.goBack();
  };

  if (!token) {
    navigation.navigate("Users");
  }

  return (
    <SafeAreaView>
      <TopNavigation
        style={{ paddingVertical: 20 }}
        title={(props) => (
          <Text
            {...props}
            style={[
              props.style,
              { fontSize: 25, fontWeight: "bold", paddingLeft: 10 },
            ]}
          >
            Cart
          </Text>
        )}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Layout
          level="1"
          style={{
            paddingHorizontal: 15,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </View>
          <View style={{ paddingBottom: 150 }}>
            <View>
              <Input
                size="small"
                placeholder="Your discount code here"
                textStyle={{ fontSize: 15, color: "#4d4d4d" }}
                accessoryRight={<ApplyCouponBtn />}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", paddingVertical: 15 }}>
                <View style={{ flex: 0.6 }}>
                  <Text style={{ fontSize: 16 }}>Sub Total:</Text>
                  <Text style={{ fontSize: 16 }}>Discount:</Text>
                </View>
                <View style={{ flex: 0.4, alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 16 }}>120$</Text>
                  <Text style={{ fontSize: 16 }}>20$</Text>
                </View>
              </View>
              <Divider />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View style={{ flex: 0.6 }}>
                  <Text status="success" category="h5">
                    Total:
                  </Text>
                </View>
                <View style={{ flex: 0.4, alignItems: "flex-end" }}>
                  <Text status="success" category="h5">
                    100$
                  </Text>
                </View>
              </View>
              <Button status="success" style={{ marginTop: 5 }}>
                Proceed to checkout
              </Button>
            </View>
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
