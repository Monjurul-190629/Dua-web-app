import sqlite3 from 'sqlite3';

export default function handler(req, res) {
  const { subcat_id, dua_id } = req.query;
  const db = new sqlite3.Database('../dua_main.sqlite');
  db.get('SELECT * FROM dua WHERE subcat_id = ? AND dua_id = ?', [subcat_id, dua_id], (err, row) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
    else if (row) {
        res.status(200).json(row);
    }
    else{
        res.status(404).json({ message: 'Subcategory not found' });
    } 
  });
}