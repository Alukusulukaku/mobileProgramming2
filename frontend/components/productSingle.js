import { useNavigation } from "@react-navigation/native";
import { Icon, Text } from "@ui-kitten/components";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const images =
  "https://fjallraven.co.nz/cdn/shop/products/kanken_23510-228_a_main_fjr_1100x.png?v=1695770263";

const FullStar = () => (
  <Icon style={styles.starrating} name="star" pack="material" />
);
const HalfStar = () => (
  <Icon style={styles.starrating} name="star-half" pack="material" />
);

function ProductSingle(props) {
  const navigation = useNavigation();
  const navigateProduct = () => {
    navigation.navigate("Details", { id: props.item.id });
  };
  return (
    <TouchableOpacity
      style={styles.productSingle}
      onPress={navigateProduct}
      activeOpacity={0.8}
    >
      <View style={{ height: 200 }}>
        <ImageBackground
          style={styles.productImage}
          imageStyle={{ marginVertical: 10 }}
          source={{ uri: props.item.image }}
          resizeMode="contain"
        >
          <Text style={styles.productTag}> -15%</Text>
        </ImageBackground>
      </View>

      <View style={styles.productInfor}>
        <View style={styles.productRating}>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
          <Text style={{ color: "#a6a6a6", fontWeight: "500" }} category="s2">
            (100)
          </Text>
        </View>
        <Text style={styles.productBrand} category="s1">
          Fjallraven
        </Text>
        <Text
          category="h6"
          style={styles.productName}
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          {props.item.title}
        </Text>
        <View style={styles.productPriceSection}>
          <Text style={styles.productPriceSale}>100$</Text>
          <Text style={{ flex: 0.1 }}></Text>
          <Text status="danger" style={styles.productPrice}>
            {props.item.price}$
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productSingle: {
    width: 160,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  productImage: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    flex: 1,
  },
  productTag: {
    backgroundColor: "#ff6f69",
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginVertical: 7,
    marginHorizontal: 7,
  },
  productInfor: {
    marginHorizontal: 4,
    flexDirection: "column",
  },
  productRating: {
    flexDirection: "row",
    marginVertical: 3,
    alignItems: "center",
  },
  starrating: {
    width: 30,
    height: 20,
    color: "#ffd934",
    marginHorizontal: -5,
  },
  productBrand: {
    color: "#a6a6a6",
    fontWeight: "600",
  },
  productName: {
    color: "#616161",
  },
  productPriceSection: {
    flexDirection: "row",
  },
  productPriceSale: {
    fontWeight: "bold",
    fontSize: 17,
    textDecorationLine: "line-through",
    color: "#525252",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default ProductSingle;
