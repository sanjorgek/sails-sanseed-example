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
      Player.find({})
      .populate('gun')
      .exec(function(err, playerFounded) {
        if(err) return done(err);
        if(playerFounded==[]) return done(new Error('Missing record'));
        if(!playerFounded[0].gun) return done(new Error('Missing association'));
        done();
      });
    });
  });
  describe('Many to Many', function() {
    it('should create many players with many clans', function(done) {
      Player.find({})
      .populate('clans')
      .exec(function(err, playerFounded) {
        if(err) return done(err);
        if(playerFounded==[]) return done(new Error('Missing record'));
        if(playerFounded[0].clans.length!=2) return done(new Error('Missing association'));
        done();
      });
    });
  });
});
