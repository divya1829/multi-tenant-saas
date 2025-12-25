export default (sequelize, DataTypes) => {
  return sequelize.define("Project", {
    name: DataTypes.STRING,
    tenantId: DataTypes.INTEGER
  });
};
