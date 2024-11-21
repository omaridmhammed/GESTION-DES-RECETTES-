'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      { nom: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { nom: 'utilisateur', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
