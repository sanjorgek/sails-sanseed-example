module.exports = {  
  attributes: {
    name: {
      type: 'string'
    },
    players: {
      collection: 'player',
      via: 'clans',
      dominant: true
    } 
  }
};