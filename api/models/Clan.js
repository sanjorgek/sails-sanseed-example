module.exports = {  
  attributes: {
    name: {
      type: 'string'
    },
    location: {
      type: 'string'
    },
    players: {
      collection: 'player',
      via: 'clans',
      dominant: true
    } 
  }
};