const express = require("express");
const app = express();
require("dotenv").config();
port = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mounting the router
app.use("/api/v1", blog);

//connect with db
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(port, () => console.log(`Listening on port ${port}...`));


app.get("/", (req, res) => {
  res.send("welcome to our blog application");
});
