module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            screens: "./src/screens",
            components: "./src/components",
            constants: "./src/constants",
            services: "./src/services",
            styles: "./src/styles",
            images: "./assets/images",
            fonts: "./assets/fonts",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
