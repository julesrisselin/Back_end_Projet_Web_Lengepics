//Import de la library de connexion la base
import Database from "mysql2-async";
// Configuration de la connexion
const db = new Database({
host: "127.0.0.1",
user: "root",
password: "08112006",
database: "Lengepics",
skiptzfix : true,
dateStrings : true,
});
// Rend accessible 
export default db;