import { StyleSheet } from "react-native";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";

export const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MEDIUM_BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontFamily: FONTS.BOLD,
  },
});
