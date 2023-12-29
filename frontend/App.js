import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialIcons } from "./material-icons";
import { FontAwesome5 } from "./fa5-icons";
import { AppNavigator } from "./navigator.component";
import { StatusBar } from "react-native";
import { BottomNavBarProvider } from "./context/BottomNavBarContext";
import { MCIIcon } from "./MCI-icons";

export default function App() {
  return (
    <>
      <IconRegistry
        icons={[EvaIconsPack, MaterialIcons, FontAwesome5, MCIIcon]}
      />
      <StatusBar hidden={true} />

      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <BottomNavBarProvider>
          <AppNavigator />
        </BottomNavBarProvider>
      </ApplicationProvider>
    </>
  );
}
