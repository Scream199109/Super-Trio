const express = require('express');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 4000;
const loginRouter = require('./routes/login.routes');
const regRouter = require('./routes/reg.routes');
const logoutRouter = require('./routes/logout.routes');

config(app);

app.use('/reg', regRouter);

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.listen(PORT, () => {
  console.log(`Server port ${PORT} at started.....`);
});
