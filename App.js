import { StyleSheet, View, Image } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  console.log("Hello from my app");
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return <WelcomeScreen />;
  //return <ViewImageScreen />;
}
