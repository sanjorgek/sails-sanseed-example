module.exports.seed = {
  locations : {
    test: {
      user: {
        scheme: [
          {
            data: {
              name: "juan paco",
              lastName: "pedro de la mar"
            }
          }
        ],
        migrate: 'drop'
      },
      player: {
        scheme: [
          {
            data: {
              username: "sailor",
              password: "1234567890987654321"
            },
            relations: {
              user: {
                name: "juan paco"
              }
            }
          }
        ],
        migrate: 'drop'
      }
    },
    faker: {
      user: {
        scheme: {
          faker: {
            format: {
              name: "{{name.firstName}}",
              lastName: "{{name.lastName}}"
            },
            locale: 'es_MX',
            quantity: 10
          }
        },
        migrate: 'drop'
      }
    }
  },
  routes: true
}
