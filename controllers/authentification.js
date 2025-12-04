import * as userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";
import jwt from'jsonwebtoken';

export async function authentificationUser(req, resp) {
    const user = await userModel.getUserByMail(req.body.email)
    const password_match = await bcrypt.compare(req.body.password, user.password)
    if (user == undefined || !password_match) {
        resp.json({
            success: false,
            message: "Email ou mot de passe incorrect"
        })     
    } else {
        const token = jwt.sign({id: user.id }, 'voicimaclé');
        resp.cookie('token',token, { maxAge: 1000*60*60*24*365, httpOnly: true });
        resp.json({
            message:'Votre session a bien été créer',
            token: token
        })
    } 
}

export async function authentificationUserByToken(req, resp) {
    if (req.cookies.token == undefined){
        resp.json({
            message:'Token invalide'
        })
    } else {
        const tokenData = jwt.verify(req.cookies.token, 'voicimaclé');
        const user = await userModel.getUser(tokenData.id);
        resp.json(user)
    }
}
