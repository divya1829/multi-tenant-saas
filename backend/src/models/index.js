import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

import TenantModel from "./tenant.model.js";
import UserModel from "./user.model.js";
import ProjectModel from "./project.model.js";
import TaskModel from "./task.model.js";

const Tenant = TenantModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Project = ProjectModel(sequelize, DataTypes);
const Task = TaskModel(sequelize, DataTypes);

export { sequelize };
export { Tenant, User, Project, Task };
