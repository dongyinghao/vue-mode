const loginLogin = require('./api/basic/login-login.json')
const indexMarket = require('./api/basic/index-market.json')

const mock = function (app) {
  app.post('/api/basic/login', function (req, res) {
    res.json(loginLogin)
  })

  app.get('/api/basic/initialize', function (req, res) {
    res.json(indexMarket)
  })
}

module.exports = mock
