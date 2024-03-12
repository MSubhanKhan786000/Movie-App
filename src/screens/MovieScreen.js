import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";
import { MovieScreenStyles } from "styles/MovieScreenStyles";
import CastCard from "components/CastCard";
import ItemSeparator from "components/ItemSeparator";
import MovieCard from "components/MovieCard";
import {
  getMoviesById,
  getPoster,
  getVideo,
  getLanguages,
} from "services/MovieService";
import { APPEND_TO_RESPONSE as AR } from "constants/Urls";

const { height, width } = Dimensions.get("screen");
const setWidth = w => (width / 100) * w;
const setHeight = h => (height / 100) * h;

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [isCastSelected, setIsCastSelected] = useState(true);

  useEffect(() => {
    getMoviesById(
      movieId,
      `${AR.VIDEO},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`
    ).then(response => setMovie(response?.data));
  }, []);

  return (
    <ScrollView style={MovieScreenStyles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(217,217,217,0)"]}
        start={[0, 0.3]}
        style={MovieScreenStyles.linearGradient}
      />
      <View style={MovieScreenStyles.moviePosterImageContainer}>
        <Image
          style={MovieScreenStyles.moviePosterImg}
          resizeMode="cover"
          source={{ uri: getPoster(movie?.backdrop_path) }}
        />
      </View>
      <View style={MovieScreenStyles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={35} color={COLORS.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            Share.share({ message: `${movie?.title}\n\n${movie?.homepage}` })
          }
        >
          <Text style={MovieScreenStyles.headerText}>Share</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={MovieScreenStyles.playButton}
        onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}
      >
        <Ionicons name="play-circle-outline" size={70} color={COLORS.WHITE} />
      </TouchableOpacity>
      <ItemSeparator height={setHeight(37)} />
      <View style={MovieScreenStyles.movieTitleContainer}>
        <Text style={MovieScreenStyles.movieTitle} numberOfLines={2}>
          {movie?.original_title}
        </Text>
        <View style={MovieScreenStyles.row}>
          <Ionicons name="heart" size={22} color={COLORS.HEART} />
          <Text style={MovieScreenStyles.ratingText}>
            {movie?.vote_average}
          </Text>
        </View>
      </View>
      <Text style={MovieScreenStyles.genreText}>
        {movie?.genres?.map(genre => genre?.name)?.join(", ")} |{" "}
        {movie?.runtime} Min
      </Text>
      <Text style={MovieScreenStyles.genreText}>
        {getLanguages(movie?.original_language)?.english_name}
      </Text>
      <View style={MovieScreenStyles.overviewContainer}>
        <Text style={MovieScreenStyles.overviewTitle}>Overview</Text>
        <Text style={MovieScreenStyles.overviewText}>{movie?.overview}</Text>
      </View>
      <View>
        <Text style={MovieScreenStyles.castTitle}>Cast</Text>
        <View style={MovieScreenStyles.castSubMenuContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(true)}
          >
            <Text
              style={{
                ...MovieScreenStyles.castSubMenuText,
                color: isCastSelected ? COLORS.BLACK : COLORS.LIGHT_GRAY,
              }}
            >
              Cast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(false)}
          >
            <Text
              style={{
                ...MovieScreenStyles.castSubMenuText,
                color: isCastSelected ? COLORS.LIGHT_GRAY : COLORS.BLACK,
              }}
            >
              Crew
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginVertical: 5 }}
          data={isCastSelected ? movie?.credits?.cast : movie?.credits?.crew}
          keyExtractor={item => item?.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <CastCard
              originalName={item?.name}
              characterName={isCastSelected ? item?.character : item?.job}
              image={item?.profile_path}
            />
          )}
        />
      </View>
      <Text style={MovieScreenStyles.extraListTitle}>Recommended Movies</Text>
      <FlatList
        data={movie?.recommendations?.results}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({ item }) => (
          <MovieCard
            title={item.original_title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            releaseDate={item.release_date}
            heartless={false}
            onPress={() => navigation.navigate("movie", { movieId: item.id })}
          />
        )}
      />
      {/* Similar Movies Flatlist */}
      <Text style={MovieScreenStyles.extraListTitle}>Similar Movies</Text>
      <FlatList
        data={movie?.similar?.results}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({ item }) => (
          <MovieCard
            title={item.original_title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            releaseDate={item.release_date}
            heartless={false}
            onPress={() => navigation.navigate("movie", { movieId: item.id })}
          />
        )}
      />
    </ScrollView>
  );
};

export default MovieScreen;
