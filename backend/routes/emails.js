const router = require("express").Router();
const passport = require("passport");
const axios = require("axios");
var cors = require("cors");

const gapi = require("googleapis");

const base = "https://www.googleapis.com/gmail/v1/users/";

// router.use(cors({ origin: "http://localhost:3000" }));

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(base + req.user.googleId + "/messages");
  var arr = [];
  var promises;
  axios({
    method: "get",
    url: base + req.user.googleId + "/messages",
    headers: {
      Authorization: "Bearer " + req.user.accessToken
    }
  })
    .then(r => {
      console.log(r.data.messages.length);
      arr = [];
      promises = r.data.messages.map(message => {
        // arr.push(message.id)
        console.log(base + req.user.googleId + "/messages/" + message.id);
        return axios({
          method: "get",
          url: base + req.user.googleId + "/messages/" + message.id,
          headers: {
            Authorization: "Bearer " + req.user.accessToken
          }
        })
          .then(response => {
            // arr.push(response.data);
            var email = {};
            (email.id = response.data.id),
              (email.threadId = response.data.threadId);
            email.labels = response.data.labels;
            email.content = response.data.snippet;
            let from = response.data.payload.headers.filter(h => {
              return h.name === "From";
            })[0].value;
            console.log(from);
            let nameEndIndex = from.indexOf("<");
            console.log(nameEndIndex);
            email.sender = {};
            email.sender.name = from.substring(0, nameEndIndex - 1);
            console.log(from.substring(nameEndIndex, from.indexOf(">")));
            email.sender.email = from.substring(
              nameEndIndex + 1,
              from.indexOf(">")
            );
            email.subject = response.data.payload.headers.filter(h => {
              return h.name === "Subject";
            })[0].value;
            arr.push(email);
            console.log(arr.length);
          })
          .catch(() => {
            console.log("oirnon4fgrtrutv");
          });
      });
    })
    .then(() => {
      console.log("hi there " + arr.length);
      Promise.all(promises).then(() => {
        console.log("how about now " + arr.length);
        res.json({ arr: arr });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
