const db = require('../models');
const Client = db.clients;

// Create and save a new client in database
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.grade) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a client
  const client = new Client({
    email: req.body.email,
    grade: req.body.grade,
  });

  // Save client in the database
  client
    .save(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Client.',
      });
    });
};

// Retrieve all clients from the database.
exports.findAll = (req, res) => {
  Client.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving clients.',
      });
    });
};

// Retrieve all the client containing email string from the database 
exports.find = (req, res) => {
  const email = req.query.email;
  var condition = { email: { $regex: email, $options: 'i' } };

  Client.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data.',
      });
    });
};

// Retrieve grades mean of all clients with an aggregation
exports.retrieveGradesMean = (req, res) => {
  Client.aggregate([
    {
      $match: {
        grade: {
          $exists: true,
        },
      },
    },
    {
      $group: {
        _id: null,
        averageGrade: {
          $avg: '$grade',
        },
      },
    },
  ])
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data.',
      });
    });
};
