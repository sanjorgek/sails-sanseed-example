module.exports.seed = {
  locations : {
    test: {
      account: {
        data: [
          {
            name: "Test",
            street: "Downtown Abey"
          },
          {
            name: "Test1",
            street: "Downtown Abey"
          }
        ],
        migrate : 'drop'
      },
      user: {
        faker: {
          format: {
            username: "internet.userName",
            name: "name.firstName",
            password: "internet.password"
          },
          quantity: 10
        },
        migrate: 'drop'
      }
    }
  },
  routes: true
}
