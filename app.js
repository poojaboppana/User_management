const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroutes'); 

const app = express();

const url = 'mongodb://localhost:27017/firstapplication';
mongoose.connect(url).then(() => {
  console.log("Database connected successfully");
}).catch(() => {
  console.log("Error occurred, database not connected");
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', userRoutes);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
