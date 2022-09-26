'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@example.com',
        password:
        '$2a$10$b.p8.bpNPzaIBaoTMDy67efB.iDS1rW.dqurPFSB9BfhXrt8Ku75e',
        nickname: 'admin',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
