require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
})

app.get('/', (req, res, next) => {
    res.status(200).json(new Date(Date.now()).toISOString())
});

app.use(require('./routes/notes_routes'));

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Connection to MongoDB failed. Error message: ${error}`);
    });