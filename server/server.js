// Import config, set env variables
require('./config/config');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');
const publicPath = path.resolve(__dirname, '../client/dist');
const db = require('./db/mysql');


// Route for serving SPA
app.get('/', express.static(path.resolve(__dirname, publicPath)));

app.use(express.static('../client/dist'));

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
app.use(bodyParser.json());

app.post('/api/contacts', (req, res) => {
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


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

