module.exports = {  
  attributes: {
    name: {
      type: 'string'
    },
    ammo: {
      type: 'number'
    }, 
    players: {
      collection: 'player',
      via: 'gun'
    }
  }
};