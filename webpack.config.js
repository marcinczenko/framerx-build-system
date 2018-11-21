/* global __dirname, require, module*/

const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

const libraryName = require("./package.json").name;
const outputFile = "index" + ".js";

const config = {
  mode: "development",
  entry: __dirname + "/index.ts",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom'
    }
  },
  // externals: {
  //   react: {
  //     commonjs: 'react'
  //   },
  //   ReactDOM: {
  //     commonjs: 'react-dom'
  //   }
  // },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: [
            ["emotion", { "hoist": true }],
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /(\.tsx|\.ts)$/,
        loader: "awesome-typescript-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              relativeUrls: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              relativeUrls: true
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules")],
    extensions: [".json", ".js", ".jsx", ".tsx", ".ts"],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json")
      })
    ]
  }
};

module.exports = config;
