import { StyleSheet, Dimensions } from "react-native";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";

const { height, width } = Dimensions.get("screen");
const setWidth = w => (width / 100) * w;
const setHeight = h => (height / 100) * h;

export const MovieScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImg: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linearGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: "absolute",
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
    left: 0,
    top: 50,
    elevation: 20,
  },
  headerText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },
  playButton: {
    position: "absolute",
    top: 110,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitle: {
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
    width: setWidth(60),
  },
  ratingText: {
    marginLeft: 5,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  movieTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  genreText: {
    color: COLORS.LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingTop: 5,
    fontFamily: FONTS.BOLD,
    fontSize: 13,
  },
  overviewContainer: {
    backgroundColor: COLORS.EXTRA_LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewTitle: {
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
  overviewText: {
    color: COLORS.LIGHT_GRAY,
    paddingVertical: 5,
    fontFamily: FONTS.BOLD,
    fontSize: 13,
    textAlign: "justify",
  },
  castTitle: {
    marginLeft: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },
  castSubMenuContainer: {
    marginLeft: 20,
    flexDirection: "row",
    marginVertical: 5,
  },
  castSubMenuText: {
    marginRight: 10,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 13,
  },
  extraListTitle: {
    marginLeft: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
    marginVertical: 8,
  },
});
