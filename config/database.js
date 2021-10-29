const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  const collection = await client
    .db("users_api")
    .collection("users")
    .find({})
    .toArray();
  // perform actions on the collection object
  console.log(collection);
  if (err) {
    console.log(err);
  }
  client.close();
});

/*
const client = await MongoClient.connect('yourMongoURL', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
// specify the DB's name
const db = client.db('nameOfYourDB');
// execute find query
const items = await db.collection('items').find({}).toArray();
console.log(items);
// close connection
client.close();

*/
