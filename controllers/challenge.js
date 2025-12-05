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
            data: {
                id: data.id,
                picture: data.picture,
                date_start: data.date_start,
                date_end: data.date_end,
            },
        })
    }
}


export async function subChallenge(req, resp) {
    const data = await challengeModel.subChallenge(req.body.title_theme, req.body.description_theme, req.file, req.body.date_start, req.body.date_end)
    resp.json({
        success: true,
        message : "Challenge ajouté ", 
    })
}