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
      gun: {
        scheme: {
          faker: {
            format: {
              name: "{{company.companyName}}",
              ammo: "{{random.number}}"
            },
            locale: 'es_MX',
            quantity: 10
          }
        },
        migrate: 'drop'
      },
      player: {
        scheme: [
          {
            data: {
              username: "sailor",
              password: "1234567890987654321"
            },
            oneTo: {
              user: {
                name: "juan paco"
              },
              gun: {
                ammo: {'>': 15}
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
