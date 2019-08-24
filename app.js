const { CLIENT_BASE_URL, NODE_ENV, PORT } = process.env;
const express = require("express");
const app = express();

// Hookup Database Connection
require("./db/connection")();

// Application-level Middleware
if (NODE_ENV === "development") app.use(require("morgan")("dev"));
app.use(require("body-parser").json());

// Setup CORS
app.use(
  require("cors")({
    origin: CLIENT_BASE_URL,
    optionsSuccessStatus: 200
  })
);

// Attach Token To Request
app.use(require("./api/middleware/set-token"));

// Routes
app.use("/api", require("./api/routes/auth"));
// app.use("/api/users", require("./api/routes/users"));
app.use("/api/students", require("./api/routes/students"));

// Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`Could not ${req.method} ${req.path}`);
  error.status = 404;
  next(error);
});

// Error Handler
app.use((err, req, res, next) => {
  if (NODE_ENV === "development") console.log(err);
  const { message, status } = err;
  res.status(status).json({ status, message });
});

// Open Connection
const listener = () => console.log(`Listening on Port ${PORT}`);
app.listen(PORT, listener);
