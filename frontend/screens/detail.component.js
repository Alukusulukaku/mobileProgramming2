import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  Button,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import axios from "axios";
import Carousel from "react-native-reanimated-carousel";
import { View } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useBottomNavBar } from "../context/BottomNavBarContext";
import { FullStar } from "../components/icons/icon";
import { HalfStar } from "../components/icons/icon";
import CategorySingle from "../components/home/category";

const BackIcon = (props) => <Icon {...props} name="arrow-back" pack="eva" />;

const images = [
  "https://thepilloutdoor.com/contents/wp-content/uploads/2020/06/banner-Fjallraven-K%C3%A5nken-rid.jpg",
  "https://www.fjallravensaleusa.com/includes/templates/fjallravensaleusa/images/banner.jpg",
  "https://www.rei.com/blog/wp-content/uploads/sites/4/2020/09/00-kanken.jpg?fit=2000%2C1000",
  "https://cdn.mos.cms.futurecdn.net/PMLQnjTutaNnLQv84BGWFd.jpg",
];

export const DetailsScreen = ({ route, navigation }) => {
  const { setTabBarVisible } = useBottomNavBar();
  const { id } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      setTabBarVisible(false);
    }, [])
  );
  const [products, setProducts] = useState([]);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");

          setProducts(response.data);
        } catch (error) {
          // handle error
          alert(error.message);
        }
      }
      fetchItems();
    }, 0);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  const [product, setProduct] = useState({});
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          try {
            const response = await axios.get(
              `https://fakestoreapi.com/products/${id}`
            );
            setProduct(response.data);
          } catch (error) {
            // handle error
            alert(error.message);
          }
        }
        fetchItems();
      }, 0);
      return () => clearTimeout(delayDebounceFn);
    },
    [id]
  );
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const navigateBack = () => {
    navigation.goBack();
  };
  const AddToCart = async (id) => {
    try {
      const produtValue = JSON.stringify([{ id: id, qty: 1 }]);
      await AsyncStorage.setItem("cart", produtValue);
    } catch (e) {}
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={(props) => (
          <Text
            {...props}
            style={[
              props.style,
              {
                fontSize: 17,
                fontWeight: "bold",
                paddingLeft: 10,
                width: "80%",
              },
            ]}
          >
            {product.title}
          </Text>
        )}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout level="2" style={{ flex: 1, alignItems: "center" }}>
        <ScrollView>
          <Layout level="2">
            <Carousel
              loop
              width={width}
              height={height / 2}
              data={images}
              scrollAnimationDuration={500}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <ImageBackground
                    style={styles.bannerImg}
                    source={{ uri: item }}
                    resizeMode="cover"
                  ></ImageBackground>
                </View>
              )}
            />
          </Layout>
          <Layout
            level="2"
            style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}
          >
            <Layout level="2" style={{ flexDirection: "col" }}>
              <Text category="h5" style={{ color: "#222222" }}>
                {product.title}
              </Text>
              <Text category="s1" style={{ color: "#666666" }}>
                {product.category}
              </Text>
            </Layout>
            <Layout level="2" style={{ flexDirection: "row" }}>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
              <Text style={{ color: "#666666" }}>(12)</Text>
            </Layout>
            <Layout
              level="2"
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <Text category="h4" style={{ color: "#222222" }}>
                ${product.price}
              </Text>
              <Text
                category="h6"
                style={{
                  textDecorationLine: "line-through",
                  marginLeft: 4,
                  color: "#ababab",
                }}
              >
                ${product.price}
              </Text>
            </Layout>
            <Layout level="2" style={{ paddingTop: 6 }}>
              <Text category="s1">{product.description}</Text>
            </Layout>
          </Layout>
          <Divider
            style={{ alignSelf: "center", width: "80%", marginVertical: 12 }}
          />
          <Layout level="2">
            <CategorySingle
              title={"Featured items you may like"}
              products={products}
            />
          </Layout>
        </ScrollView>
      </Layout>
      <TopNavigation
        style={{
          elevation: 10,
          shadowColor: "#000",
        }}
        title={() => {
          return (
            <Button
              size="medium"
              status="danger"
              onPress={AddToCart(product.id)}
              style={{
                width: "100%",
                marginVertical: 10,
              }}
            >
              ADD TO CART
            </Button>
          );
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
  bannerDetail: {
    marginVertical: 20,
    marginHorizontal: 20,
    opacity: 0.9,
  },
  bannerFilter: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  bannerButton: {
    width: "50%",
    borderRadius: 15,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
  },
  bannerImg: {
    flex: 1,
    flexDirection: "col",
    width: "100%",
    justifyContent: "flex-end",
  },
});
