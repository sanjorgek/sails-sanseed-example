describe('Faker', function() {
  describe('Fill model', function() {
    it('should create 10 guns', function(done) {
      Gun.find({}).exec(function(err, gunsFounded) {
        if(err) return done(err);
        if(gunsFounded.length!=10) return done(new Error('Missing guns'));
        done(); 
      });
    });
  });
  describe('Fill attribute', function() {
    it('should create a clan with location', function(done) {
      Clan.find({name: "Proudfoot"})
      .exec(function(err, clanFounded) {
        if(err) return done(err);
        if(clanFounded.length==0) return done(new Error('Missing clan'));
        if(!clanFounded[0].location || !clanFounded[0].location.length) return done(new Error('Missing location'));
        if(clanFounded[0].location==='{{address.state}}') return done(new Error('Bad faker settings'));
        done(); 
      });
    });
  });
});
