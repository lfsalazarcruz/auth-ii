const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors');
const morgan = require('morgan');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

const userRoutes = require('./routes/userRoutes');
server.use('/api/', userRoutes);

const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});