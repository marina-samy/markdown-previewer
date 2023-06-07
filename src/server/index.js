const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/api/markdown", async (req, res) => {
  const response = await fetch("https://www.markdownguide.org/api/v1/");
  const data = await response.text();
  res.send(data);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});