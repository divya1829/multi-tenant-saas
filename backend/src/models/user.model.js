export default (sequelize, DataTypes) => {
  return sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    tenantId: DataTypes.INTEGER
  });
};
