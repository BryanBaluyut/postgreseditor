const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/connect', async (req, res) => {
  const { host, port, username, password } = req.body;

  try {
    const pool = new Pool({
      host,
      port,
      user: username,
      password,
      database: 'postgres', // Connect to default postgres database
    });

    // Test the connection
    const client = await pool.connect();
    
    try {
      // Query to get all databases
      const result = await client.query(
        "SELECT datname FROM pg_database WHERE datistemplate = false;"
      );
      
      res.json({ 
        message: 'Connected successfully',
        databases: result.rows 
      });
    } finally {
      client.release();
      // Close the pool after we're done
      await pool.end();
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ 
      message: 'Failed to connect to database',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
