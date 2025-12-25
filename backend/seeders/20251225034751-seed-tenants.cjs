"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tenants", [
      {
        name: "Demo Company",
        subdomain: "demo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
