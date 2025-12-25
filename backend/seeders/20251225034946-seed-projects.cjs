"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("projects", [
      {
        name: "Demo Project",
        description: "Initial project for demo tenant",
        tenant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
