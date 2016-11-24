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
            username: "{{internet.userName}}",
            names: "{{name.firstName}} {{name.lastName}}",
            password: "{{internet.password}}"
          },
          locale: "es_MX",
          quantity: 10
        },
        migrate: 'drop'
      }
    }
  },
  routes: true
}
