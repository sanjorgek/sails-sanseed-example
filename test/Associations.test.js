describe('Associations', function() {
  describe('One to One', function() {
    it('should create a player with one user', function(done) {
      User.find({name: 'juan paco'})
      .populate('player')
      .exec(function(err, userFounded) {
        if(err) return done(err);
        if(userFounded==[]) return done(new Error('Missing record'));
        if(!userFounded[0].player) return done(new Error('Missing association'));
        done();
      });
    });
  });
  describe('One to Many', function() {
    it('should create a player with many guns', function(done) {
      done();
    });
  });
  describe('Many to Many', function() {
    it('should create many players with many clans', function(done) {
      done();
    });
  });
});
