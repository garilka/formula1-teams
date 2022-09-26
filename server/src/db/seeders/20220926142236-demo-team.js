'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teams', [
      {
        name: 'Red Bull Racing',
        foundation_year: 1997,
        wins: 4,
        fee_paid: true,
        user_id: 1,
      },
      {
        name: 'Ferrari',
        foundation_year: 1950,
        wins: 16,
        fee_paid: true,
        user_id: 1,
      },
      {
        name: 'Mercedes',
        foundation_year: 1970,
        wins: 8,
        fee_paid: false,
        user_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
