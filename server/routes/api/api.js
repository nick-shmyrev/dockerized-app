const express = require('express');
const router = express.Router();

// Routers
const contactsRouter = require('./contacts/contacts');

router.all('/api', (req, res) => res.sendStatus(418));

router.use('/api', contactsRouter);

module.exports = router;
