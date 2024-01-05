import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" pack="eva" />;

function ContactScreen({ navigation }) {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        accessoryLeft={BackAction}
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
            Your location
          </Text>
        )}
        alignment="center"
      />
      <Layout style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

export default ContactScreen;
