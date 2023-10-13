const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

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
    const slots = result.rows;
    res.status(200).json(slots);
  } catch (error) {
    res.status(404).json({ error: "Fetch" });
  }
});

app.get("/volunteers", async (req, res) => {
  try {
    const query = `SELECT * FROM Volunteers`;
    const result = await db.query(query);
    const volunteers = result.rows;
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(404).json({ error: "Fetch" });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const query = `SELECT
      B.booking_id,
      S.title AS title,
      S.startdate AS startdate,
      S.enddate AS enddate,
      V.name AS name,
      B.booking_date
    FROM Bookings AS B
    INNER JOIN Slots AS S ON B.session_id = S.id
    INNER JOIN Volunteers AS V ON B.volunteer_id = V.id;`;
    const result = await db.query(query);
    const bookings = result.rows;
    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ error: "Fetch" });
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const { session_id, volunteer_id } = req.body;
    const query = `
      INSERT INTO Bookings (session_id, volunteer_id)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [session_id, volunteer_id];
    const result = await db.query(query, values);
    const booking = result.rows[0];
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: "Booking failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});
