const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "signup"
});

app.post("/bookings", async (req, res) => {
  try {
    const { sportname, venue, venueavailable, equipmentavailable, matchduration } = req.body;

    // Validate the data or add more validation as needed

    const insertData = `
      INSERT INTO bookings (sportname, venue, venueavailable, equipmentavailable, matchduration)
      VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [sportname, venue, venueavailable, equipmentavailable, matchduration];

    await pool.query(insertData, values);

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(4000, () => {
  console.log("listening");
});

module.exports = pool;
