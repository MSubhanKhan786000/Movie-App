import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";

const { width } = Dimensions.get("screen");

const GenreCard = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? COLORS.MEDIUM_BACKGROUND : COLORS.WHITE,
      }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}
    >
      <Text
        style={{
          ...styles.genreText,
          color: active ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    elevation: 5,
    padding: 8,
    marginVertical: 2,
    width: width * 0.25,
    alignItems: "center",
  },
  genreText: {
    fontSize: 15,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
});

export default GenreCard;
