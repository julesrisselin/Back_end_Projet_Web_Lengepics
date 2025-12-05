import * as userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';

export async function authentificationUser(req, resp) {
    const user = await userModel.getUserByMail(req.body.email)
    const password_match = await bcrypt.compare(req.body.password, user.password)
    if (user == undefined || !password_match) {
        resp.json({
            success: false,
            message: "Email ou mot de passe incorrect"
        })
    } else {
        const token = jwt.sign({ id: user.id }, 'voicimaclé');
        resp.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 365, httpOnly: true });
        resp.json({
            message: 'Votre session a bien été créer',
            token: token
        })
    }
}

export async function authByToken(req, resp, next) {
    let token = req.cookies.token
    if (token == undefined && req.header("Authorization")) {
        token = req.header("Authorization").split(" ")[1];
    }
    if (token == undefined) {
        resp.status(401).json({
            message: 'Token manquant, invalide ou expiré'
        })
    } else {
        const tokenData = jwt.verify(token, 'voicimaclé');
        const user = await userModel.getUser(tokenData.id);
        if (user == undefined) {
            resp.status(401).json({
                message: 'Token manquant, invalide ou expiré'
            })
        } else {
            req.user = user;
            next();
        }
    }
}

export async function authAdmin(req, resp, next) {
    if (req.user == undefined) {
        resp.status(401).json({
            message: 'Token manquant, invalide ou expiré'
        })
    } else if (!req.user.is_admin) {
        resp.status(401).json({
            message: 'Token manquant, invalide ou expiré'
        })
    } else {
        next();
    }
}

