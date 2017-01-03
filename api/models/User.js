module.exports = {  
  attributes: {
    name: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    player:{
      model:'player',
      unique: true
    }
  }
}