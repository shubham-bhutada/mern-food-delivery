const express = require("express");
const cors = require("cors");
require("dotenv").config();


//app config
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db Connection
const db = require("./config/db.js");

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(PORT, () => {
  console.log(`Server is up & running on http://localhost:${PORT}`);
});
