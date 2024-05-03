'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define an array of user objects
    const usersData = [
      {
        acces_type: 'admin',
        username: 'user1',
        password: '$2y$10$Mt4Em/U0xK/XuIRrWoLV2.sjRJl1pDRdQmB1FQoeXfwI0VANjHZ5u', // Password1
        email: 'user1@example.com',
        name: 'Juan',
        lastname: 'Perez'
      },
      {
        acces_type: 'client',
        username: 'user2',
        password: '$2y$10$diQIQslHI9d4W2EyNqmxuutikf2ByWHTsE8Rv6.wT5ZOACvmdHX3e',
        email: 'user2@example.com',
        name: 'Maria',
        lastname: 'Garcia'
      },
      {
        acces_type: 'client',
        username: 'user3',
        password: '$2y$10$ZDh9t9Xo1bJvFxIAErKGSu0eAOZfUH0TYxXYTo4QzBZf1DyoDpbye',
        email: 'user3@example.com',
        name: 'Alejandro',
        lastname: 'Martinez'
      },

    ];

    // Use bulkCreate to insert users into the database
    await queryInterface.bulkInsert('users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('users', null, {});
  }
};