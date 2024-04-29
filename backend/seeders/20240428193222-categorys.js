'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const categoriesData = [
      {
        category_id: 1,
        category_name: 'Literatura clásica'
      },
      {
        category_id: 2,
        category_name: 'Realismo mágico'
      },
      {
        category_id: 3,
        category_name: 'Ciencia ficción'
      },
      {
        category_id: 4,
        category_name: 'Ficción'
      },
      {
        category_id: 5,
        category_name: 'Aventura'
      },
      {
        category_id: 6,
        category_name: 'Romance'
      },
      {
        category_id: 7,
        category_name: 'Ficción infantil'
      }
      // Agrega más categorías si es necesario
    ];
    await queryInterface.bulkInsert('categories', categoriesData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  }
};
