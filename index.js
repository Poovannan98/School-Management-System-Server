const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const studentRoute = require("./routes/student");



// MIDDILEWARE CONFIGURATION
dotenv.config();
app.use(express.json());
app.use(cors());

// DATABASE CALL
connectDb();

// ROUTE CONFIGURATION
app.use("/api/student", studentRoute);

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log("Backend is running at port ",PORT);
});