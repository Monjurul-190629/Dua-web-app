const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


/// middleware

app.use(express.json());
app.use(cors());


/// default

app.get('/', (req, res) => {
    res.send('Server is running Now')
})


app.listen(port, (req, res) => {
    console.log(`Server is running at ${port}`)
})