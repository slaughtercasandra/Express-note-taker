const express = require('express');
const path = require('path');
const htmlRoutes = require("./routes/html");
//const notes= require('./public/notes');
const api = require('./routes/api');
const PORT = 3001;

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/' , htmlRoutes)


// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
