
const path = require('path');

const config = {
  port: process.env.PORT || '3000',
  appFolder: path.join(__dirname, 'app')
}

module.exports = require('@sublet/safeplaces-server')(config)