module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: String,
      grade: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Client = mongoose.model("client", schema);
  return Client;
};
