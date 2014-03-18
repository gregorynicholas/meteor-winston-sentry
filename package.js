
Package.describe({
  summary: "winston-sentry packaged for meteor.js"
});

Npm.depends({
  "winston": "0.7.2",
  "winston-sentry": "0.0.5"
});

Package.on_use(function(api) {

  api.export('Winston');
  api.export('WinstonSentry');

});
