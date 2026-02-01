const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = 3000;
app.listen(3000, () => {
  console.log("App running on port 3000");
});
