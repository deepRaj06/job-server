
const express = require("express");
const {connection} = require("./config/db.js");
const {jobController} = require("./routes/job.route.js");
const cors = require('cors');
const PORT = process.env.PORT
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Job Posting");
})

app.use(cors());

app.use("/job", jobController);

app.listen( PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
        console.log("Error connected to db")
    }
    console.log(`Listening to port ${PORT}`)
})

