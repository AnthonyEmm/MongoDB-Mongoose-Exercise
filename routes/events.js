const express = require("express");

const {
  getEvents,
  createEvent,
  getEvent,
  joinEvent,
} = require("../controllers/events");

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents).post(createEvent);
eventsRouter.route("/:id").get(getEvent);
eventsRouter.route("/:id/join").patch(joinEvent);

module.exports = eventsRouter;
