const express = require('express');

const app = express();
app.use(express.json());
const SERVER_PORT = 3002;

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} running.`)});