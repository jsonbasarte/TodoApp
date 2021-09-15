const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get('/', (req, res) => {
    res.send("Express JS")
});

app.listen(8000, () => {
    console.log("Server running");
});