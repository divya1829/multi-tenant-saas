export default (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    tenantId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  });
};
