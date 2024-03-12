import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import IMAGES from "assets/images/applogo.png";
import { SplashScreenStyles } from "styles/SplashScreenStyles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 5000);
  }, []);

  return (
    <View style={SplashScreenStyles.container}>
      <Image source={IMAGES} style={SplashScreenStyles.logo} />
      <Text style={SplashScreenStyles.text}>TMDB MOVIE APP</Text>
    </View>
  );
};

export default SplashScreen;
