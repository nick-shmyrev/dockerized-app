const express = require('express');
const router = express.Router();

const db = require('../../../db/mysql');


router.route('/contacts')
  // API route for requesting contacts data
  .get((req, res) => {
    try {
      const sql = `SELECT contact_id, contact_name, contact_phone, contact_address
                   FROM contacts`;
      
      db.query(sql, (err, result) => {
        if (err) throw err;
        
        res.status(200).json(result);
      });
    }
    catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  // API route for adding contacts
  .post(express.json(), (req, res) => {
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
    catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

router.route('/contacts/:id')
  // API route for updating contacts
  .patch(express.json(), (req, res) => {
    try {
      const { id } = req.params;
      const name = db.escape(req.body.contact_name);
      const phone = db.escape(req.body.contact_phone);
      const address = db.escape(req.body.contact_address);
      
      const sql = `UPDATE contacts
                   SET contact_name = ${name},
                       contact_phone = ${phone},
                       contact_address = ${address}
                   WHERE contact_id = ${id};`;
      
      db.query(sql, (err, result) => {
        if (err) throw err;
        
        res.status(200).send({
          contact_id: id,
          contact_name: name,
          contact_phone: phone,
          contact_address: address
        });
      });
    }
    catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  // API route for deleting contacts
  .delete((req, res) => {
    try {
      const { id } = req.params;
      const sql = `DELETE FROM contacts
                   WHERE contact_id = ${id}`;
    
      db.query(sql, (err, result) => {
        if (err) throw err;
      
        res.status(200).send({ deletedId: Number(id) });
      });
    }
    catch(err) {
      console.log(err);
      res.sendStatus(500);
    }
  });


module.exports = router;
