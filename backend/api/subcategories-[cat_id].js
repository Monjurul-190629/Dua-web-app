import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  const { cat_id } = req.query;
  
  const db = new sqlite3.Database('dua_main.sqlite');

  db.all('SELECT * FROM sub_category WHERE cat_id = ?', [cat_id], (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
    else{
        res.status(200).json(rows);
    }
  });
}