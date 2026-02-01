const express = require("express");
const path = require("path");

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.get("/build-info", (req, res) => {
  res.json({
    buildNumber: process.env.BUILD_NUMBER || "LOCAL",
    status: "SUCCESS"
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
