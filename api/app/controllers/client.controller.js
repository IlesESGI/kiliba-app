const db = require("../models");
const Client = db.clients;

// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.grade) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Client
  const client = new Client({
    email: req.body.email,
    grade: req.body.grade
  });

  // Save Client in the database
  client
    .save(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {

  Client.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};


// Retrieve one client from the database
exports.findOne = (req, res) => {
  const email = req.query.email;
  var condition = { email: { $regex: email, $options: "i" } };

  Client.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};