const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4|svg|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'file-loader', 
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  
  },
};