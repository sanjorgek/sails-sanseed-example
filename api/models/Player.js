module.exports = {  
  attributes: {
    userName: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    clans: {
      collection: 'clan',
      via: 'players'
    },
    gun: {
      model: 'gun'
    },
    user: {
      collection:'user',
      via: 'player'
    }
  }
};