module.exports = app => {
  const clients = require("../controllers/client.controller.js");

  var router = require("express").Router();

  // Post route to create and save a client 
  router.post("/createClient", clients.create);

  // Get route to retrieve all clients present in database
  router.get("/retrieveAllClients", clients.findAll);

  // Get route to retrieve all the client containing email string from the database
  router.get("/retrieveClient", clients.find);

  // Get route to compute the average mean of all the clients
  router.get("/retrieveGradesMean", clients.retrieveGradesMean);

  // Base URL of the API
  app.use("/api/clients", router);
};
