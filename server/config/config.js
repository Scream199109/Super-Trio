const express = require('express');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const signUpCheck = require('../middleware/authUser');

const FileStore = sessionFileStore(session);
const authChecker = require('../middleware/authChecker');
// файловое хранилище

const config = (app) => {
  // eslint-disable-next-line no-undef
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  // eslint-disable-next-line no-undef

  app.use(cookieParser());
  app.use(session({
    key: 'user_uid',
    secret: 'ourTeamLeadTheBest',
    store: new FileStore({ logFn() { } }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }));
  // app.use(authChecker);
  app.use(signUpCheck);
};
module.exports = config;
