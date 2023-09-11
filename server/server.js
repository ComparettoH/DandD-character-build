const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const genderRouter = require('./routes/gender.router')
const raceRouter = require('./routes/race.router')
const classRouter = require('./routes/class.router')
const backgroundRouter = require('./routes/background.router')
const charlistRouter = require('./routes/charlist.route')
const characterRouter = require('./routes/character.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/gender', genderRouter);
app.use('/api/race', raceRouter);
app.use('/api/class', classRouter);
app.use('/api/background', backgroundRouter);
app.use('/api/charlist', charlistRouter)
app.use('/api/character', characterRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
