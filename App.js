import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "screens/SplashScreen";
import HomeScreen from "screens/HomeScreen";
import MovieScreen from "screens/MovieScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default () => {
  const [fontLoaded] = useFonts({
    Regular: require("assets/fonts/Inria_Sans/InriaSans-Regular.ttf"),
    Bold: require("assets/fonts/Inria_Sans/InriaSans-Bold.ttf"),
    Italic: require("assets/fonts/Inria_Sans/InriaSans-Italic.ttf"),
    Light: require("assets/fonts/Inria_Sans/InriaSans-Light.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
