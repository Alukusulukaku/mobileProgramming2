import { Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const FullStar = () => (
  <Icon style={styles.starrating} name="star" pack="material" />
);
export const HalfStar = () => (
  <Icon style={styles.starrating} name="star-half" pack="material" />
);

const styles = StyleSheet.create({
  starrating: {
    width: 30,
    height: 20,
    color: "#ffd934",
    marginHorizontal: -5,
  },
});
