'use strict';
import bcrypt from 'bcryptjs';

module.exports = {
  up: async (queryInterface) => {
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    await queryInterface.bulkInsert('Utilisateurs', [
      { 
        nom: 'Admin',
        email: 'admin@example.com',
        mot_de_passe: hashedPassword,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Utilisateurs', null, {});
  },
};
