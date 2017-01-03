module.exports = {  
  attributes: {
    name: {
      type: 'string'
    },
    ammo: {
      type: 'integer'
    }, 
    players: {
      collection: 'player',
      via: 'gun'
    }
  }
};