import * as challengeModel from "../models/challenge.js";

export async function getCurrentChallenge(req, resp) {
    const data = await challengeModel.getCurrentChallenge();
    if (data == undefined) {
        resp.json({
            success: false,
            data: "There are no challenges at the moment.",
        })
    } else {
        resp.json({
            success: true,
            data: {data:data},
        })
    }
}


export async function subChallenge(req, resp) {
    if (req.file == undefined){
        resp.json({
            success: false,
            message : "Mauvais format pour l'upload ", 
        })
    }
    const filepath = req.file.path.substr(6);
    const data = await challengeModel.subChallenge(req.body.title, req.body.description, filepath, req.body.date_start, req.body.date_end)
    resp.json({
        success: true,
        message : "Challenge ajouté ", 
    })
}