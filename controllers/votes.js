import * as votesModel from "../models/votes.js";

export async function getAllVotes(req, resp) {
    const data = await votesModel.getAllVotes();
    resp.json({
        data : data
    });
}

export async function getVotesById(req, resp) {
    const data = await votesModel.getVotesById(req.params.id);
    if (data == undefined) {
        resp.json({
            sucess: false,
            data: "Votes non trouvé"
        })
    } else {
        resp.json({
            data: data
        })
    }
}

export async function subVotes(req, resp) {
    const data = await votesModel.subVotes(req.body.id_participations ,req.body.note_creativity, req.body.note_on_theme, req.body.note_technique)
    resp.json({
        success: true,
        message: `Votes bien ajouté.`
    })
}



