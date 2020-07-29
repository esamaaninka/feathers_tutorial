
const { authenticate } = require('@feathersjs/authentication').hooks;

const processContact = require('../../hooks/process-contact');

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [authenticate('jwt')], // miksi ei toimi ilman authenticationa ?
    find: [],
    get: [],
    create: [processContact()],
    update: [],
    patch: [processContact()],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
