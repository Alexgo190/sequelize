"use strict"

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
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@email.com",
          role: "admin",
          uuid: "12dc3f8b-852f-46eb-9c5a-b3e7eb4778c7",
          createdAt: "2023-09-24T10:07:57.000Z",
          updatedAt: "2023-09-24T12:32:14.564Z",
        },
        {
          name: "Jane Doe",
          email: "jane@email.com",
          role: "admin2",
          uuid: "12dc3f8b-852f-46eb-9c5a-b3e7eb498c7",
          createdAt: "2023-09-24T10:07:57.000Z",
          updatedAt: "2023-09-24T12:32:14.564Z",
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {})
  },
}
