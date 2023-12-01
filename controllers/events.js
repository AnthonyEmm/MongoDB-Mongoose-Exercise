const Event = require("../models/events");

// Create a new event in the DB //
const createEvent = async (req, res) => {
  try {
    const { name, description, location, organizer } = req.body;
    const event = await Event.create({
      name,
      description,
      location,
      organizer,
    });
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! Something went wrong");
  }
};

// Get all events from the DB //
const getEvents = async (req, res) => {
  try {
    const event = await Event.find({});
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! No users were found");
  }
};

// Get one event from the DB by ID //
const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("organizer");
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! No users were found");
  }
};

// Patch one event from the DB by ID //
const joinEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const event = await Event.updateOne(
      { _id: id },
      { $push: { attendees: userId } },
    );
    // const result = await event.save();
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send("Oops! No users were found");
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  joinEvent,
};
