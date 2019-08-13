const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const passportSetup = require("./config/passport");
const keys = require("./config/keys");
const User = require("./models/user");
const cookieSession = require("cookie-session");
const passport = require("passport");
var cors = require("cors");
const app = express();

// use it before all route definitions
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = 5000;

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// set view engine
app.set("view engine", "ejs");

//connect to mongoDB
mongoose.connect(keys.mongoDB.dbURI, () => {
  console.log("connected to mongo db");
});

// set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home route
app.get("/", (req, res) => {
  // res.render('home');
  new User({
    name: "test",
    googleId: 123
  })
    .save()
    .then(newUser => {
      console.log("new user created " + newUser);
    });
});

app.get("/user", (req, res) => {
  console.log(req.user);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.json({
    success: true,
    message: "user has successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

app.listen(PORT, () => {
  console.log("app now listening for requests on port " + PORT);
});
