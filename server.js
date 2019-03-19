// Main file

/* Basic express setup  */
const express = require('express');
const app = express();

app.get('/api/Fibonacci', (req, res) => {
  fibonacci = num => {
    let n = Math.abs(num);
    if (n <= 2) return 1;

    const f = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
    }

    if (num < 0 && num % 2 === 0) return -1 * f[f.length - 1];
    else return f[f.length - 1];
  };

  res.json(Number.isSafeInteger() ? fibonacci(parseInt(req.query.n)) : '');
});

app.get('/api/ReverseWords', (req, res) => {
  // reverseWord = str => {
  //   var words = []; // Initalise empty array
  //   words = str.match(/\S+/g); // Use regex to match all non-whitespace characters
  //   var result = "";

  //   /* Uses for loop to split words, reverse and concat all characters in the new order to return given word/words in reverse  */
  //   for (var i = 0; i < words.length; i++) {
  //     result +=
  //       words[i]
  //         .split("")
  //         .reverse()
  //         .join("") + " ";
  //   }

  //   return result;
  // };

  const reverse = str =>
    Array.from(str)
      .reverse()
      .join('');

  if (req.query.sentence === '' || req.query.sentence === undefined) {
    res.sendStatus(200);
  } else {
    res.send(reverse(req.query.sentence));
  }
});

app.get('/api/TriangleType', (req, res) => {
  // Simple destructuring to make the code cleaner

  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const c = parseInt(req.query.c);

  getTriangleType = (a, b, c) => {
    return (
      (a === b && b == c && 'equilateral') ||
      ((a === b || a === c || b === c) && 'isosceles') ||
      'scalene'
    );
  };

  if (a < 0 || b < 0 || c < 0) {
    // console.log("error found");
    res.json('Error');
  } else {
    res.send(getTriangleType(a, b, c));
  }

  // Checks all three variables against set cases to return triangle type
});

app.get('/api/token', (req, res) => {
  // Checks all three variables against set cases to return triangle type

  res.send('5c755f51-2367-48df-8d74-6c6f9337108f');
});

const PORT = process.env.PORT || 8000; // Dynamic port for deployment

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
