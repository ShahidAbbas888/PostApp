var express = require("express");
var db=require('./db/db');
const path=require('path');
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const app = express();
const mongoose = require("mongoose");
//const serveStatic = require('serve-static');
// db connection
// mongoose
//   .connect(
//     "mongodb+srv://shahid:bsef16m028@cluster0.bt06e.mongodb.net/postApp?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("connected sucessfully");
//   })
//   .catch(() => {
//     console.log("not connected");
//   });
const Post = require("./models/post");
const bodyparser = require("body-parser");
//app.use('/images',express.static(path.join('back-end/images')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', express.static(path.join(__dirname, 'images')))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// he is using this instead of cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;