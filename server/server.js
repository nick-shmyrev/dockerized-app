const express = require('express');
const server = express();
const PORT = 3000;

// Root Router
const rootRouter = require('./routes/api/api');

server.all('/api', (req, res) => res.sendStatus(418));

server.use(rootRouter);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

