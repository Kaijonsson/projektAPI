const { MongoClient } = require("mongodb");
const URI = process.env.MONGO_URI;

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
