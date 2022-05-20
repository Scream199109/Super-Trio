const express = require('express');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 4000;
// const homeRouter = require('./routes/home.routes');
const loginRouter = require('./routes/login.routes');
const regRouter = require('./routes/reg.routes');
const logoutRouter = require('./routes/logout.routes');
const profileRouter = require('./routes/profile.routes');

config(app);

// app.use('/', homeRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);
// app.use('/', require('./routes/card.routes'));

app.listen(PORT, () => `Server started at port ${PORT}...`);
