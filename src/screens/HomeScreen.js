import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import COLORS from "constants/Colors";
import FONTS from "constants/Fonts";
import GenreCard from "components/GenreCard";
import MovieCard from "components/MovieCard";
import ItemSeparator from "components/ItemSeparator";
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from "services/MovieService";
import IMAGES from "assets/images/applogo.png";
import IMAGE from "assets/images/man.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeScreenStyles } from "styles/HomeScreenStyles";

const HomeScreen = ({ navigation }) => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [topRatedMovies, setTopRatedMovies] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getNowPlayingMovies().then(movieResponse => {
      setNowPlayingMovies(movieResponse);
    });
    getUpcomingMovies().then(movieResponse => {
      setUpcomingMovies(movieResponse);
    });
    getTopRatedMovies().then(movieResponse => {
      setTopRatedMovies(movieResponse);
    });
  }, []);

  const handleProfileClick = () => {
    Alert.alert("User Profile");
  };

  const filterMovies = (movies, query) => {
    if (!query) return movies;
    const regex = new RegExp(`\\b${query}\\b`, "i");
    return movies.filter(movie => regex.test(movie.original_title));
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.MEDIUM_BACKGROUND }}>
      <View style={HomeScreenStyles.images}>
        <Image source={IMAGES} style={HomeScreenStyles.logo} />
        <TouchableWithoutFeedback onPress={handleProfileClick}>
          <Image source={IMAGE} style={HomeScreenStyles.manImage} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TextInput
          style={HomeScreenStyles.searchInput}
          placeholder="Search movies..."
          placeholderTextColor={COLORS.WHITE}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Feather
          name="search"
          size={24}
          color={COLORS.LIGHT_GRAY}
          style={HomeScreenStyles.searchIcon}
        />
      </View>
      <View style={HomeScreenStyles.headerContainer}>
        <Text style={HomeScreenStyles.headerTitle}>Streaming Now</Text>
        {/* <Text style={styles.headerSubtitle}>View All</Text> */}
      </View>
      <View>
        <FlatList
          data={filterMovies(nowPlayingMovies.results, searchQuery)}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
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
      </View>
      <View style={HomeScreenStyles.headerContainer}>
        <Text style={HomeScreenStyles.headerTitle}>Top Rated Movies</Text>
        {/* <Text style={styles.headerSubtitle}>View All</Text> */}
      </View>
      <View>
        <FlatList
          data={filterMovies(topRatedMovies.results, searchQuery)}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.original_title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              releaseDate={item.release_date}
              size={0.7}
              onPress={() => navigation.navigate("movie", { movieId: item.id })}
            />
          )}
        />
      </View>
      <View style={HomeScreenStyles.headerContainer}>
        <Text style={HomeScreenStyles.headerTitle}>Coming Soon</Text>
        {/* <Text style={styles.headerSubtitle}>View All</Text> */}
      </View>
      <View>
        <FlatList
          data={filterMovies(upcomingMovies.results, searchQuery)}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.original_title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              releaseDate={item.release_date}
              size={0.5}
              onPress={() => navigation.navigate("movie", { movieId: item.id })}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
