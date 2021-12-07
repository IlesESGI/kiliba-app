module.exports = mongoose => {

  // Define mongoose Schema of a Client made of an email as a String and a grade as a Number
  var schema = mongoose.Schema(
    {
      email: String,
      grade: Number
    },
    { timestamps: true }
  );

  const Client = mongoose.model("client", schema);
  return Client;
};
