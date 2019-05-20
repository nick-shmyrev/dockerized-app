const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db/mysql');

app.use(cors());

app.get('/api', (req, res) => {
  res.sendStatus(418);
});

// API route for requesting contacts data
app.get('/api/contacts', (req, res) => {
  try {
    const sql = "SELECT * FROM contacts";

    db.query(sql, (err, result) => {
      if (err) throw err;

      res.status(200).json(result);
    });
  }
  catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// API route for adding contacts
app.post('/api/contacts', bodyParser.json(), (req, res) => {
  try {
    const name = db.escape(req.body.contact_name);
    const phone = db.escape(req.body.contact_phone);
    const address = db.escape(req.body.contact_address);
    
    const sql = `INSERT INTO contacts (contact_name, contact_phone, contact_address)
                 VALUES (${name}, ${phone}, ${address});`;
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      
      res.status(200).send({ insertId: result.insertId });
    });
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete('/api/contacts/:id', (req, res) => {
  try {
    const { id } = req.params;
    const sql = `DELETE FROM contacts
                 WHERE contact_id = ${id}`;
    
    db.query(sql, (err, result) => {
      if (err) throw err;
      
      res.status(200).send({ deletedId: Number(id) });
    });
  }
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

