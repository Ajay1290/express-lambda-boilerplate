const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


// For Lambda Testing Purpose Only
app.get('/', (req, res) => {
   res.json({
      status: 200,
      message: `For Lambda Testing Purpose Only`
   });
});

app.get('/hello', (req, res) => {
   res.json({
      status: 200,
      message: `Hello ${req.query.name}`
   });
});

app.get('/greet', (req, res) => {
   res.json({
      status: 200,
      message: `Greetings ${req.query.name}`
   });
});


module.exports = app;