// Main file

/* Basic express setup  */
const express = require("express");
const app = express();

app.get("/api/Fibonacci", (req, res) => {});

app.get("/api/ReverseWords", (req, res) => {
  reverseWord = str => {
    var words = []; // Initalise empty array
    words = str.match(/\S+/g); // Use regex to match all non-whitespace characters
    var result = "";

    /* Uses for loop to split words, reverse and concat all characters in the new order to return given word/words in reverse  */
    for (var i = 0; i < words.length; i++) {
      result +=
        words[i]
          .split("")
          .reverse()
          .join("") + " ";
    }

    return result;
  };

  // res.send(reverseWord(req.params.sentence));
  res.send("hello world");
});

app.listen(8000, () => console.log("server listening on port 8000"));
