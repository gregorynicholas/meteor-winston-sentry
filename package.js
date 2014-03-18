
Package.describe({
  summary: "winston-sentry packaged for meteor.js"
});

Npm.depends({
  "winston": "0.7.2",
  "winston-sentry": "0.0.5"
});

Package.on_use(function(api) {

  api.use('coffeescript', 'server');
  api.add_files('winston-sentry.coffee', 'server');

  api.export('Winston');
  api.export('WinstonSentry');

});
