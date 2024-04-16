const { ObjectId } = require("mongodb");
const connectToDatabase = require("../dbConnection");

class CatModel {
  constructor({ title, path, description, id }) {
    this.title = title;
    this.path = path;
    this.description = description;
    this.id = id;
  }

  async createCat() {
    const connection = await connectToDatabase();
    return connection.collection("cats").insertOne({
      title: this.title,
      path: this.path,
      description: this.description,
    });
  }

  async listCats() {
    const connection = await connectToDatabase();
    return connection.collection("cats").find({}).toArray();
  }

  async deleteCat() {
    const connection = await connectToDatabase();
    return connection
      .collection("cats")
      .deleteOne({ _id: ObjectId.createFromHexString(this.id) });
  }
}

module.exports = CatModel;
