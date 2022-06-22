import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('products',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    description:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Product;
 
