const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys= require('./config/keys');
require('./models/user');

require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app. listen(PORT);

//clientId:421181010018-cvlg95eac6vabbi5p78q7nmm3tt2i050.apps.googleusercontent.com
//clientSecret:aCLndFemqsS4G0b1SG0DQUjR

//https://infinite-refuge-76476.herokuapp.com/
//https://git.heroku.com/infinite-refuge-76476.git