const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
});

app.get("/", function (request, response) {
  response.send("Every day is a day to shine. Shine on :)");
});

app.get("/slots", async (req, res) => {
  try {
    const query = `SELECT * FROM Slots`;
    const result = await db.query(query);
    const videos = result.rows;
    res.status(200).json(videos);
  } catch (error) {
    res.status(404).json({ error: "Fetch" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});
