const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');


const FileStore = require('session-file-store')(session);
// файловое хранилище

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session({
    name: 'user_sid',
    secret: 'ourTeamLeadTheBest',
    store: new FileStore({ logFn() { } }),
    resave: false,
    retries: 0,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 60 * 12,
      httpOnly: true,
    },

  }));
};

module.exports = config;

// new Filestore({ path: './sessions/' });
