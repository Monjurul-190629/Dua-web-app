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
    } 
    else {
        console.log('Connected to the SQLite database.');
    }
});


// API Endpoint: Fetch all categories
app.get('/categories', (req, res) => {
    db.all('SELECT * FROM category', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } 
        else {
            res.json(rows);
        }
    });
});

// Now for subcategory

app.get('/subcategories', (req, res) => {
    db.all('SELECT * FROM sub_category', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } 
        else {
            res.json(rows);
        }
    });
});



/// Now for dua

app.get('/duas', (req, res) => {
    db.all('SELECT * FROM dua', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } 
        else {
            res.json(rows);
        }
    });
});


// Now for specific category with cat_id

app.get('/categories/:cat_id', (req, res) => {
    const { cat_id } = req.params; 

    db.get('SELECT * FROM category WHERE cat_id = ?', [cat_id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } 
        else if (row) {
            res.json(row); // Send the category details as a response
        } 
        else {
            res.status(404).json({ message: 'Category not found' }); // If no category matches the cat_id
        }
    });
});


// Get subcategories by cat_id
app.get('/subcategories/:cat_id', (req, res) => {
    const { cat_id } = req.params;

    db.all('SELECT * FROM sub_category WHERE cat_id = ?', [cat_id], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } 
        else {
            res.json(rows);
        }
    });
});

// Get specific subcategory by cat_id and subcat_id
app.get('/subcategories/:cat_id/:subcat_id', (req, res) => {
    const { cat_id, subcat_id } = req.params;

    db.get(
        'SELECT * FROM sub_category WHERE cat_id = ? AND id = ?',
        [cat_id, subcat_id],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } 
            else if (row) {
                res.json(row);
            } 
            else {
                res.status(404).json({ message: 'Subcategory not found' });
            }
        }
    );
});


// Now dua based on subcategory

app.get('/duas/:subcat_id', (req, res) => {
    const {subcat_id} = req.params;
    db.all('SELECT * from dua WHERE subcat_id = ?', [subcat_id], (err, row) => {
        if(err){
            res.status(500).json({error : err.message});
        }
        else if(row){
            res.json(row);
        }
        else{
            res.status(404).json({message : "No dua found"})
        }
    })
})

// Now dua based on subcat_id and dua_id

app.get('/duas/:subcat_id/:dua_id', (req, res) => {
    const {subcat_id, dua_id} = req.params;
    db.get('SELECT * from dua WHERE subcat_id = ? and dua_id = ?', [subcat_id, dua_id], (err, row) => {
        if(err){
            res.status(500).json({error : err.message})
        }
        else if(row){
            res.json(row);
        }
        else{
            res.status(404).json({message : "Dua not found"})
        }
    })
})



/// default

app.get('/', (req, res) => {
    res.send('Server is running Now')
})


app.listen(port, (req, res) => {
    console.log(`Server is running at ${port}`)
})