require('dotenv').config(); // Load environment variables

const express = require("express");
const app = express();
const db = require("./config/database");

// Connect to the database
db.connect(); 

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route import and setup
const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
    console.log(`APP is listening at ${PORT}`);
});
