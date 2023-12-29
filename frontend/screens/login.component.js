import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import {
  Button,
  Icon,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import {
  useFocusEffect,
  useIsFocused,
  useRoute,
} from "@react-navigation/native";
import { useBottomNavBar } from "../context/BottomNavBarContext";

const BackIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 32, height: 32 }]}
    name="arrow-back"
    pack="eva"
  />
);
const AlertIcon = (props) => (
  <Icon {...props} name="alert-circle-outline" pack="eva" />
);

const LoginIcon = (props) => <Icon {...props} name="login" pack="material" />;
const RegisterIcon = (props) => (
  <Icon
    {...props}
    style={[props.style, { width: 24, height: 24 }]}
    name="arrow-right-alt"
    pack="material"
  />
);
const FacebookIcon = (props) => (
  <Icon name="facebook-f" {...props} pack="fa5" />
);

const GoogleIcon = (props) => <Icon name="google" {...props} pack="fa5" />;

export const LoginScreen = ({ navigation }) => {
  const { setTabBarVisible } = useBottomNavBar();
  useFocusEffect(
    React.useCallback(() => {
      setTabBarVisible(false);
    }, [])
  );

  const navigateDetails = () => {
    navigation.navigate("Details");
  };
  const navigateBack = () => {
    navigation.goBack();
  };

  const [value, setValue] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} pack="eva" />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            Login
          </Text>
        )}
        alignment="center"
        accessoryLeft={BackAction}
      />

      <Layout
        level="1"
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 50,
        }}
      >
        <View>
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 200, height: 150, marginBottom: 10 }}
          />
        </View>

        <Input label="Username" placeholder="ambatukam" style={styles.input} />
        <Input
          value={value}
          label="Password"
          style={styles.input}
          placeholder="********"
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text category="s1" style={{ fontWeight: "700" }}>
            Forgot your password?
          </Text>
          <Button
            size="tiny"
            appearance="ghost"
            status="primary"
            accessoryLeft={RegisterIcon}
          ></Button>
        </View>
        <Layout
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            margin: 10,
          }}
        >
          <Button
            onPress={navigateDetails}
            size="medium"
            status="primary"
            accessoryLeft={LoginIcon}
            style={styles.button}
          >
            LOGIN
          </Button>
        </Layout>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text category="s1">Don't have account?</Text>
          <Text
            category="s1"
            status="primary"
            style={{ fontWeight: "700", pointerEvents: "auto" }}
            onPress={navigateDetails}
          >
            {" "}
            Sign up.
          </Text>
        </View>
        <Layout
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",

            marginTop: 70,
          }}
        >
          <Text category="s1" style={{ fontWeight: "700" }}>
            Or sign in with
          </Text>
          <Button
            accessoryLeft={FacebookIcon}
            status="info"
            style={styles.button}
          >
            Login with Facebook
          </Button>
          <Button
            accessoryLeft={GoogleIcon}
            status="danger"
            style={styles.button}
          >
            Login with Google
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    borderRadius: 15,
    width: "100%",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  },
  button: {
    marginTop: 5,
    width: "100%",
  },
});
