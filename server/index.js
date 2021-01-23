const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/devKeys');
const passport = require('passport');
// Model Imports
require('./models/User');
// Services imports
require('./services/passport');
// DB connection

const deprecationWarning = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(
    keys.mongoURI,
    deprecationWarning)
    .then(() => console.log('Connected to database'));

// Express Instance
const app = express();
// parse application/x-www-form-urlencoded 
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Caducidad de cookies
app.use(
    cookieSession({
        // Cuanto dura la cookie: 30 días
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // Clave de hash de la cookie
        keys: [keys.cookieKey]
    })
);

// Passport authentication cookie
app.use(passport.initialize());
app.use(passport.session());

// AuthRoute
require('./routes/authRoute')(app);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));