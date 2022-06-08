const mongoose = require('mongoose');
require("dotenv").config({ path: __dirname + "./../../.env" });

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.trt7i.mongodb.net/${DB_DATABASE}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;