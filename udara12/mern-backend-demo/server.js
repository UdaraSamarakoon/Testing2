const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection established successfully");
})
const accountRouter = require('./routes/account');
const userRouter = require('./routes/user');

app.use('/account',accountRouter);
app.use('/user',userRouter);

app.listen(port, () => {

    console.log(`server is running on port: ${port}`);
});