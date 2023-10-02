const express = require("express");
const app = express();
const port = 8000;
app.use("/", require("./routes"));

app.listen(8000, function (err) {
  if (err) {
    console.log(`Error is running the server: ${err}`);
  }
  console.log(`Server is up and running on port: ${port}`);
});
