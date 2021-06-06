const express = require("express");
const axios = require("axios");
const app = express();

app.get("/get", (req, res) => {
  axios
    .get("https://api.wazirx.com/api/v2/tickers")
    .then((result) => {
      x = Object.values(result.data);
      y = x.length;
      z = [];

      for (i = 0; i < 10; i++) {
       z.push(x[i])
      }
      return res.send(z)

    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
//https://api.wazirx.com/api/v2/tickers
