import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ItemSeparator = ({ height, width }) => {
  return <View style={{ width, height }} />;
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};
export default ItemSeparator;
