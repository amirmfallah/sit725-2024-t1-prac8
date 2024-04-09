const connectToDatabase = require("../dbConnection");

class CatModel {
  constructor({ title, path, description }) {
    this.title = title;
    this.path = path;
    this.description = description;
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
}

module.exports = CatModel;
