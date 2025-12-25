"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tasks", [
      {
        title: "Initial Task",
        description: "First task for demo project",
        status: "todo",
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
