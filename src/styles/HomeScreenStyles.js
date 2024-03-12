import { StyleSheet } from "react-native";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";

export const HomeScreenStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    verticalAlign: "bottom",
    fontFamily: FONTS.BOLD,
  },
  searchInput: {
    borderWidth: 3,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginHorizontal: 20,
    color: COLORS.LIGHT_GRAY,
  },
  searchIcon: {
    position: "absolute",
    top: 14,
    left: 30,
  },
  manImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    margin: 20,
  },
  images: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "space-between",
    margin: 10,
  },
});
