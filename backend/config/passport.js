const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:8080/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log("passport callback function fired:");
      console.log(profile);
      //check if user exists in db
      User.findOne({
        googleId: profile.id
      }).then(currentUser => {
        // if (currentUser) {
        //   console.log("user exists and has name " + currentUser.name);
        //   done(null, currentUser);
        // } else {
        new User({
          googleId: profile.id,
          name: profile.displayName,
          emailId: profile._json.email,
          accessToken: accessToken,
          refreshToken: refreshToken
        })
          .save()
          .then(newUser => {
            console.log("new user created: ", newUser);
            done(null, newUser);
          })
          .catch(err => {
            console.log(err);
          });
        //}
      });
    }
  )
);
