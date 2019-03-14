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

  res.send(reverseWord(req.query.sentence));
});

app.get("/api/TriangleType", (req, res) => {
  const { a, b, c } = req.query; // Simple destructuring to make the code cleaner

  getTriangleType = (a, b, c) => {
    return (
      (a === b && b == c && "equilateral") ||
      ((a === b || a === c || b === c) && "isosceles") ||
      "scalene"
    );
  };

  // Checks all three variables against set cases to return triangle type

  res.send(getTriangleType(a, b, c));
});

app.get("/api/Token", (req, res) => {
  // Checks all three variables against set cases to return triangle type

  res.send("00000000-0000-0000-0000-000000000000");
});

const PORT = process.env.PORT || 8000; // Dynamic port for deployment

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
