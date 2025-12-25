"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    const password = await bcrypt.hash("password123", 10);

    await queryInterface.bulkInsert("users", [
      {
        name: "Super Admin",
        email: "admin@saas.com",
        password,
        role: "super_admin",
        tenant_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tenant Admin",
        email: "tenant@saas.com",
        password,
        role: "tenant_admin",
        tenant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regular User",
        email: "user@saas.com",
        password,
        role: "user",
        tenant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
