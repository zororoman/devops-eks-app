const express = require("express");
const app = express();

// API endpoint to expose build info
app.get("/build-info", (req, res) => {
  res.json({
    buildNumber: process.env.BUILD_NUMBER || "local",
    environment: "EKS",
    status: "Deployed Successfully 🚀"
  });
});

const PORT = 3000;
app.listen(3000, () => {
  console.log("App running on port 3000");
});
