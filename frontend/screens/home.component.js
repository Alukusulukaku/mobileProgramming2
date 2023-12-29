import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Layout } from "@ui-kitten/components";
import HomeBanner from "../components/home/banner";
import CategorySingle from "../components/home/category";
import { useBottomNavBar } from "../context/BottomNavBarContext";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import axios from "axios";

const data = [
  { title: "Sale", summary: "End year sale" },
  { title: "New", summary: "New product" },
  { title: "Trending", summary: "Trending product" },
];

export const HomeScreen = ({ navigation }) => {
  const { setTabBarVisible } = useBottomNavBar();
  useFocusEffect(
    React.useCallback(() => {
      setTabBarVisible(true);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeBanner navigation={navigation} />
          <Layout
            level="2"
            style={{
              flex: 1,
              paddingVertical: 15,
            }}
          >
            {data.map((item, index) => {
              return (
                <CategorySingle
                  title={item.title}
                  summary={item.summary}
                  products={products}
                  key={index}
                />
              );
            })}
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
