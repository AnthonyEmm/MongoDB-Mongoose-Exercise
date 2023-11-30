const express = require("express");
require("dotenv/config");
require("./db");

const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/events", eventsRouter);

// Starting the server //
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
