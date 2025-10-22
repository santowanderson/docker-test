const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<marquee><h1>Testing the <span style="color:red;wheight:bold">ADD</span> docker instruction in a remote repository</h1></marquee>")
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
