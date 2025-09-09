const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // Keeps tracks of requests to our server

//configuring the dotenv 
dotenv.config();

//* App
const app=express();

//-------------Adding the database connection---------------------//
//* connect to database
mongoose.connect(process.env.MONGO_URI, {
    dbName:"firebase-auth-sample",
}).then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
});

mongoose.connection.on("error", (err) => {
  console.log("Database connection error:", err);
});



//* middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//* routes

app.use("/api", authRoutes);


const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server running at http://:${port}/`);
})