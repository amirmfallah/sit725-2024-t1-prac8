const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://mongo:2581251514@cluster0.hx6pmgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

async function connectToDatabase() {
  if (!dbConnection) {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
      dbConnection = client.db("sit725");
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    }
  }
  return dbConnection;
}

module.exports = connectToDatabase;
