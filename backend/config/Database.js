
import  { Sequelize } from "sequelize";
 
const db = new Sequelize('demo_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
 

