import { StyleSheet, View } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log("Hello from my app");
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // horizontal
    flexWrap: "wrap", // wrap
    backgroundColor: "darkgrey",
    justifyContent: "center", // main axis
    alignItems: "center", // secondary axis.  detemines alignment of content within each line
    alignContent: "center",
  },
});
