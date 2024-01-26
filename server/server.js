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
  // connectionString: process.env.DB_URL,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

app.get("/", function (req, res) {
  res.send("Every day is a day to shine. Shine on :)");
});

app.get("/sessions", async (req, res) => {
  try {
    const query = `SELECT *
     FROM Sessions
     WHERE startdate >= current_date;
`;
    const result = await db.query(query);
    const sessions = result.rows;
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({ error: "Fetch" });
  }
});

app.get("/volunteers", async (req, res) => {
  try {
    const query = `SELECT * FROM Volunteers`;
    const result = await db.query(query);
    const volunteers = result.rows;
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(400).json({ error: "Fetch" });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const query = `SELECT
      B.booking_id,
      S.title AS title,
      S.startdate AS startdate,
      S.enddate AS enddate,
      S.status AS status,
      V.name AS name,
      B.booking_date
    FROM Bookings AS B
    INNER JOIN Sessions AS S ON B.session_id = S.id
    INNER JOIN Volunteers AS V ON B.volunteer_id = V.id;`;
    const result = await db.query(query);
    const bookings = result.rows;
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ error: "Fetch" });
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const { session_id, volunteer_id } = req.body;
    const queryToCheckAvailability = `
    SELECT status
    FROM Sessions
    WHERE id = $1;
    `;
    const availabilityResult = await db.query(queryToCheckAvailability, [
      session_id,
    ]);
    const sessionStatus = availabilityResult.rows[0].status;
    if (sessionStatus === "booked") {
      res.status(409).json({ error: "This session is already booked." });
      return;
    }

    const query = `
      INSERT INTO Bookings (session_id, volunteer_id)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [session_id, volunteer_id];
    const result = await db.query(query, values);
    const updateQuery = `
      UPDATE Sessions
      SET status = 'booked'
      WHERE id = $1;
    `;
    const updateValues = [session_id];
    await db.query(updateQuery, updateValues);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: "Booking failed" });
  }
});

app.delete("/bookings/:bookingId", async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const queryToGetSessionInfo = `
      SELECT session_id
      FROM Bookings
      WHERE booking_id = $1;
    `;
    const sessionInfoResult = await db.query(queryToGetSessionInfo, [
      bookingId,
    ]);

    const session_id = sessionInfoResult.rows[0].session_id;

    const deleteBookingQuery = `
      DELETE FROM Bookings
      WHERE booking_id = $1;
    `;
    await db.query(deleteBookingQuery, [bookingId]);

    const updateSessionQuery = `
      UPDATE Sessions
      SET status = 'available'
      WHERE id = $1;
    `;
    await db.query(updateSessionQuery, [session_id]);

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Cancellation failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});
