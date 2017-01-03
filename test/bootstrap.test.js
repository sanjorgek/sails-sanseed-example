var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(90000);

  sails.lift({
    environment: 'test',
    log: {
      level: 'info'
    },
    connections: {
      testDB: {
        adapter: 'sails-memory'
      }
    },
    connection: 'testDB'
  }, function(err, sails) {
    if (err) return done(err);
    done(err, sails);
  });
});

after(function(done) {
  sails.lower(done);
});

beforeEach(function(done) {
  done();
});