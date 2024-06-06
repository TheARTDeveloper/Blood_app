require("dotenv").config({ path: __dirname + "/.env" });

const mongodbLocal = process.env.MONGODB_URL_Lo;
const mongodbGlobal = process.env.MONGODB_URL;

module.exports = { mongodbLocal, mongodbGlobal };
