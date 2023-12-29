import { Text } from "@ui-kitten/components";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

function HomeBanner(props) {
  const width = Dimensions.get("window").width;
  const images = [
    "https://thepilloutdoor.com/contents/wp-content/uploads/2020/06/banner-Fjallraven-K%C3%A5nken-rid.jpg",
    "https://www.fjallravensaleusa.com/includes/templates/fjallravensaleusa/images/banner.jpg",
    "https://www.rei.com/blog/wp-content/uploads/sites/4/2020/09/00-kanken.jpg?fit=2000%2C1000",
    "https://cdn.mos.cms.futurecdn.net/PMLQnjTutaNnLQv84BGWFd.jpg",
  ];
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        autoPlayInterval={3000}
        data={images}
        scrollAnimationDuration={700}
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
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Users")}
                activeOpacity={1}
                style={styles.bannerFilter}
              >
                <View style={styles.bannerDetail}>
                  <Text style={styles.bannerText}>
                    Year-end salesdasdfasdfadsfadfdasfdsfsdf adfasdf
                  </Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default HomeBanner;
