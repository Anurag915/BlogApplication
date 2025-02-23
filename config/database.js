const mongoose = require("mongoose");
require("dotenv").config();
const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => {
        console.error("Could not connect to MongoDB...", err)
        process.exit(1);
    });
};
module.exports = connectWithDb;
