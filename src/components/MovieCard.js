// MovieCard.js
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import COLORS from "constants/Colors";
import { Entypo } from "@expo/vector-icons";
import FONTS from "constants/Fonts";
import IMAGES from "constants/Images";
import React, { useState } from "react";
import { getPoster, getLanguages } from "services/MovieService";

const MovieCard = ({
  title,
  language,
  voteCount,
  voteAverage,
  poster,
  releaseDate,
  size,
  heartless,
  onPress,
}) => {
  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);

  const imageSize = {
    width: 230 * size,
    height: 340 * size,
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={{ ...styles.container, ...imageSize }}
        imageStyle={{ borderRadius: 20 }}
        source={{ uri: getPoster(poster) }}
      >
        <View style={{ ...styles.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={IMAGES.IMDB}
            resizeMode="cover"
            style={{ ...styles.imdbImage, height: 20 * size, width: 50 * size }}
          />
          <Text
            style={{
              ...styles.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}
          >
            {voteAverage}
          </Text>
        </View>
        {!heartless ? (
          <TouchableNativeFeedback
            onPress={() => {
              setLiked(!liked);
              setVoteCountValue(
                liked ? voteCountValue - 1 : voteCountValue + 1
              );
            }}
          >
            <Entypo
              name={liked ? "heart" : "heart-outlined"}
              size={25 * size}
              color={liked ? COLORS.HEART : COLORS.WHITE}
              style={{ position: "absolute", bottom: 10, left: 10 }}
            />
          </TouchableNativeFeedback>
        ) : null}
      </ImageBackground>

      <View>
        <Text
          style={{ ...styles.movieTitle, width: 230 * size }}
          numberOfLines={3}
        >
          {title}
        </Text>
        <View style={styles.movieSubtitleContainer}>
          <Text style={styles.movieSubtitle} numberOfLines={3}>
            {getLanguages(language).english_name}
          </Text>
          <View style={styles.rowAndCenter}>
            <Entypo
              name="thumbs-up"
              size={17 * size}
              color={COLORS.LIGHT_GRAY}
              style={{ marginRight: 5 * size }}
            />
            <Text style={styles.movieSubtitle}>{voteCountValue}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>{releaseDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    borderRadius: 20,
    elevation: 10,
    marginVertical: 2,
  },
  movieTitle: {
    fontFamily: FONTS.BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieSubtitle: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    color: COLORS.LIGHT_GRAY,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontFamily: FONTS.BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
  },
  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: COLORS.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
  },
});

MovieCard.defaultProps = {
  size: 1,
  heartless: true,
};

export default MovieCard;
