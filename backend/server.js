import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { sequelize } from "./src/models/index.js";

const PORT = 5000;

const startServer = async () => {
  while (true) {
    try {
      await sequelize.authenticate();
      console.log("Database connected");
      break;
    } catch (err) {
      console.log("Waiting for database...");
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
};

startServer();
