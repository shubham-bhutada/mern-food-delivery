const express = require("express");
const cors = require("cors");
require("dotenv").config();
const foodRouter = require("./routes/foodRoute.js");
const userRouter = require("./routes/userRoute.js");
const cartRouter = require("./routes/cartRoute.js");

//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
const authMiddleware = require("./middlewares/auth.js");

//db Connection
const db = require("./config/db.js");

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", authMiddleware, cartRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(PORT, () => {
  console.log(`Server is up & running on http://localhost:${PORT}`);
});
