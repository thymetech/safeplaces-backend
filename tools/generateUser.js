// Run this from the root directory:
// node ./tools/generateUser.js

const { userService } = require('../app/lib/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

if (!process.env.SEED_MAPS_API_KEY) {
  throw new Error('Populate environment variable SEED_MAPS_API_KEY');
}

const password = 'admin';

bcrypt
  .hash(password, 5)
  .then(function (pw) {
    const params = {
      id: uuidv4(),
      organization_id: 1,
      username: 'helloDude',
      password: pw,
      email: 'admin@orgs.com',
      is_admin: true,
      maps_api_key: process.env.SEED_MAPS_API_KEY,
    };

    return userService.create(params);
  })
  .then(function (results) {
    console.log('Generated: ', results);
  })
  .catch(err => console.log(err));
