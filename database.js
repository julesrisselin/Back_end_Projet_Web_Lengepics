//Import de la library de connexion la base
import Database from "mysql2-async";
// Configuration de la connexion
const db = new Database({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: "Lengepics",
skiptzfix : true,
dateStrings : true,
});
// Rend accessible 
export default db;