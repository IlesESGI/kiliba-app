require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS to allow routes to be accessed anywhere
app.use(cors());

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect API to databse Mongo
const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database!');
  })
  .catch((err) => {
    console.log('Fail to connect to the database!', err);
    process.exit();
  });

// Call all the API's routes
require('./app/routes/client.routes')(app);

// Set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
