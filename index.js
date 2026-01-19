import cors from 'cors';
import express from "express";
// Import de la table de routage
import router from "./router.js";
import cookieParser from "cookie-parser";
import * as errorcontroller from "./controllers/errorhandler.js";
// Creation du serveur
// Utilisation de la table de routage dans l’application
const app = express();
app.use(express.json());
const corsOption = {
    origin : "http://localhost:5173"
}
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", router);

//on redirige le / vers public
app.use("/",express.static("public"))

app.use(errorcontroller.errorHandler);
// Demarrage du serveur sur le port 3000
app.listen(process.env.PORT);