const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


/// middleware

app.use(express.json());
app.use(cors());


// Connect to SQLite database
const db = new sqlite3.Database('./dua_main.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});





/// default

app.get('/', (req, res) => {
    res.send('Server is running Now')
})


app.listen(port, (req, res) => {
    console.log(`Server is running at ${port}`)
})