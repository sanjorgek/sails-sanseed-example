module.exports.seed = {
  databases : {
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
        faker: {
          format: {
            name: "{{company.companyName}}",
            ammo: Math.round(Math.random()*10+6)
          },
          locale: 'es_MX',
          quantity: 10
        },
        migrate: 'drop'
      },
      clan: {
        scheme:[
          {
            data: {
              name: 'Boffin',
              location: 'México'
            }
          },
          {
            data: {
              name: 'Proudfoot'
            },
            faker: {
              location: "{{address.state}}"
            }
          }
        ],
        migrate: 'drop'
      },
      player: {
        faker: {
          format: {
            username: "{{internet.userName}}",
            password: "{{internet.password}}"
          },
          oneTo: {
            user: {
              name: "juan paco"
            },
            gun: {
              ammo: {'>': 5}
            }
          },
          manyTo: {
            clans: [
              {name: "Boffin"},
              {name: "Proudfoot"}                
            ]
          }
        },
        migrate: 'drop'
      }
    },
    faker: {
      user: {
        faker: {
          format: {
            name: "{{name.firstName}}",
            lastName: "{{name.lastName}}"
          },
          locale: 'es_MX',
          quantity: 10
        },
        migrate: 'drop'
      }
    }
  },
  routes: true
}
