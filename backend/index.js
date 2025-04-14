const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3'); // Import better-sqlite3
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// Connect to SQLite database using better-sqlite3
const db = new Database('./dua_main.sqlite', { verbose: console.log });

// API Endpoint: Fetch all categories
app.get('/categories', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM category').all();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Now for subcategory
app.get('/subcategories', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM sub_category').all();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Now for dua
app.get('/duas', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM dua').all();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Now for specific category with cat_id
app.get('/categories/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    try {
        const row = db.prepare('SELECT * FROM category WHERE cat_id = ?').get(cat_id);
        if (row) {
            res.json(row);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get subcategories by cat_id
app.get('/subcategories/:cat_id', (req, res) => {
    const { cat_id } = req.params;
    try {
        const rows = db.prepare('SELECT * FROM sub_category WHERE cat_id = ?').all(cat_id);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get specific subcategory by cat_id and subcat_id
app.get('/subcategories/:cat_id/:subcat_id', (req, res) => {
    const { cat_id, subcat_id } = req.params;
    try {
        const row = db.prepare('SELECT * FROM sub_category WHERE cat_id = ? AND id = ?').get(cat_id, subcat_id);
        if (row) {
            res.json(row);
        } else {
            res.status(404).json({ message: 'Subcategory not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Now dua based on subcategory
app.get('/duas/:subcat_id', (req, res) => {
    const { subcat_id } = req.params;
    try {
        const rows = db.prepare('SELECT * from dua WHERE subcat_id = ?').all(subcat_id);
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(404).json({ message: "No dua found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Now dua based on subcat_id and dua_id
app.get('/duas/:subcat_id/:dua_id', (req, res) => {
    const { subcat_id, dua_id } = req.params;
    try {
        const row = db.prepare('SELECT * from dua WHERE subcat_id = ? and dua_id = ?').get(subcat_id, dua_id);
        if (row) {
            res.json(row);
        } else {
            res.status(404).json({ message: "Dua not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Default route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
