import { Divider, Icon, Layout, Text } from "@ui-kitten/components";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import ProductSingle from "../productSingle";
import { useEffect, useState } from "react";
import axios from "axios";

const data = [
  { name: "tao" },
  { name: "may" },
  { name: "dep" },
  { name: "trai" },
];

function CategorySingle(props) {
  return (
    <Layout level="2" style={[styles.category]}>
      <View style={styles.categorySection}>
        <View style={styles.categoryHeader}>
          <Text category="h4">{props.title}</Text>
          {props.summary == null ? (
            ""
          ) : (
            <Text category="s1">{props.summary}</Text>
          )}
        </View>
        <View style={styles.viewall}>
          <Text category="s1">View all</Text>
        </View>
      </View>
      <Layout level="2" style={styles.productSection}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          nestedScrollEnabled={true}
          {...props}
          data={props.products}
          renderItem={({ item, index }) => (
            <ProductSingle item={item} key={index} />
          )}
        />
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    paddingVertical: 10,
  },
  categorySection: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  categoryHeader: {
    flex: 0.7,
  },
  viewall: {
    flex: 0.3,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
  },
  productSection: {
    marginVertical: 10,
  },
});

export default CategorySingle;
