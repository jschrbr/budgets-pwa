const WebpackPwaManifest = require("webpack-pwa-manifest");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

const path = require("path");

const config = {
  mode: "production",
  entry: {
    app: "./public/assets/js/index.js",
    db: "./public/assets/js/db.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js",
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget tracker",
      short_name: "Budget",
      description: "An application for budget tracking",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/icons/android-chrome-192x192.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, "public/sw.js"),
      filename: "../service-worker.js",
      publicPath: "./public/dist",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
module.exports = config;
