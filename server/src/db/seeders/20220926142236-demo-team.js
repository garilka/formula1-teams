'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [
      {
        name: 'Red Bull Racing',
        foundationYear: 1997,
        wins: 4,
        feePaid: true,
        userId: 1,
      },
      {
        name: 'Ferrari',
        foundationYear: 1950,
        wins: 16,
        feePaid: true,
        userId: 1,
      },
      {
        name: 'Mercedes',
        foundationYear: 1970,
        wins: 8,
        feePaid: false,
        userId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
