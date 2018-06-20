const path = require("path");
const express = require("express");

const app = express();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.dev");

const compiler = webpack(config);

const DEFAULT_PORT = 3001;
app.set("port", process.env.PORT || DEFAULT_PORT);

const isDevelopment = process.env.NODE_ENV !== "production";

if (isDevelopment) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "public")));
}

app.listen(app.get("port"));
