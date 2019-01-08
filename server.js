/*eslint-disable no-console*/
const path = require("path");
const express = require("express");

const app = express();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.dev");
const chalk = require("chalk");

const compiler = webpack(config);

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;

app.set("port", PORT);

if (PORT === DEFAULT_PORT) {
  console.log(`
 ${chalk.bgHex("#224dff").white("--- ReactJS ---")}
 Starting server on port 3001
 You are connected to ${chalk.hex("#f7c132")("http://localhost:3001/")}
`);
}

const isDevelopment = process.env.NODE_ENV !== "production";

if (isDevelopment) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        builtAt: false,
        children: false,
        colors: true,
        modules: false,
      },
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "public")));
}

app.listen(app.get("port"));
