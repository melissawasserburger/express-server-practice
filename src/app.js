const express = require("express");
const app = express();
const pastesRouter = require("./pastes/pastes.router");
const pastes = require("./data/pastes-data.js");

app.use(express.json());

app.use("/pastes", pastesRouter); // Note: app.use

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
