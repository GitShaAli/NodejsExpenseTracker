// const path = require('path');

const userRoutes = require('D:/NodejsExpenseTracker/routes/admin')
const bodyParser = require('body-parser');
const express = require('express');

const cors=require("cors");
const sequelize = require('./util/database');

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/user',userRoutes);


sequelize
// .sync({ force: true })
.sync()
.then(()=> {
    app.listen(3000);
  })
.catch(err => {
  console.log(err);
})

// app.listen(3000);