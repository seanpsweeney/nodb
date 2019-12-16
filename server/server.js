require('dotenv').config()
const express = require('express'),
      {SERVER_PORT} = process.env,
      ctrl = require('./controllers/controller.js');

const app = express();

app.use(express.json());

app.get('/api/list', ctrl.getList);
app.post('/api/list', ctrl.addStatement);
app.put('/api/list/:id', ctrl.updateStatement);
app.delete('/api/list/:id', ctrl.delete);

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} running.`)});