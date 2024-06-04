import { Sequelize } from "sequelize";
import config from '../config/index.js';

// Create a new Sequelize instance con postgres
const sequelize = new Sequelize(
  config.DB.database,
  config.DB.username,
  config.DB.password,
  {
    host: config.DB.host,
    dialect: config.DB.dialect,
    port: config.DB.port,
    logging: true
    
  }
);

// Connect to database from config.js
const connectionDB = async ( )=>{
try {
  await sequelize.authenticate();
  db.sync();
  console.log('Connection a data base has been established successfully.');
} catch (error) {
  console.log(error);
}}

export default connectionDB;