// const { server } = require('../../src/');

// module.exports = server;

const request = require('supertest')
const { router } = require('../../app');

class Agent {
  constructor() {
    // router.build()
    this.server = router.app
    // this._server = require('app/server')
  }

  client() {
    return request.agent(this._server)
  }
}

module.exports = new Agent()
