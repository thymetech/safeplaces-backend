const { router } = require('../../server');
const controller = require('./controller');

router.post(
  '/login',
  router.passport.authenticate('ldap'),
  controller.login
);