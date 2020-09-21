/* eslint-disable no-console */
const mongodbconnection = require("mongoose");

mongodbconnection.connect("mongodb://127.0.0.1:27017/zemoga-test", {
  useNewUrlParser: true,
});
const { connection } = mongodbconnection;

connection.once("open", async () => {
  try {
    console.log("*** MongoDB got connected ***");
    console.log(`Our Current Database Name : ${connection.db.databaseName}`);
    await mongodbconnection.connection.db.dropDatabase(
      console.log(`${connection.db.databaseName} database dropped.`),
    );
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
});
