const express = require("express");
const catRouter = require("./routers/catRouter");
const connectToDatabase = require("./dbConnection");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/cats", catRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("App listening on port", port);
  await connectToDatabase();
});
