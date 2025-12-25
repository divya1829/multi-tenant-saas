export default (sequelize, DataTypes) => {
  return sequelize.define("Tenant", {
    name: DataTypes.STRING
  });
};
