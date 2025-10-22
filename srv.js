const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<marquee><h1>Testing the <i style="color:red;">ADD</i> docker instruction</h1></marquee>");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
