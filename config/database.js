const { MongoClient } = require("mongodb");
const URI =
  "mongodb+srv://Axel:dOsW7GAhCvNbybpl@2fa.uei60.mongodb.net/users_api?retryWrites=true&w=majority";

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Successfull connection");
  client.close();
});

module.exports.client = client;
