const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [ "babel-loader", "ts-loader" ]
      },
      { 
        test: /\.(scss|sass|css)$/i, 
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            }
          }, 
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          },
        ] 
      },
      { 
        test: /\.js$/, 
        enforce: "pre", 
        loader: "source-map-loader" 
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
}