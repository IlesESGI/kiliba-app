module.exports = app => {
  const clients = require("../controllers/client.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/createClient", clients.create);

  // Retrieve all Clients
  router.get("/retrieveAllClients", clients.findAll);

  router.get("/retrieveClient", clients.findOne);

  app.use("/api/clients", router);
};
