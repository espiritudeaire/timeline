const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personajeRoutes = require('./routes/personajeRoutes');
const test_dates_route = require('./routes/test_dates_routes');

const app = express();

mongoose.connect('mongodb+srv://espiritudeaire:123@cluster0.lg823yo.mongodb.net/historia?retryWrites=true&w=majority&appName=Cluster0');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/personajes', personajeRoutes);
app.use('/timeline', test_dates_route);

app.listen(3000, () => {
    console.log('Audiens');
});