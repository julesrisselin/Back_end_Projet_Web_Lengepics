import * as votesModel from "../models/votes.js";

export async function getAllVotes(req, resp) {
    const data = await votesModel.getAllVotes();
    resp.json({
        data : data
    });
}

export async function getVotesById(req, resp) {
    const id_part = req.params.id.split("=");
    const data = await votesModel.getVotesById(id_part[1]);
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
    const data = await votesModel.subVotes(req.user.id ,req.body.id_participations ,req.body.note_creativity, req.body.note_on_theme, req.body.note_technique)
    resp.json({
        success: true,
        message: `Votes bien ajouté.`
    })
}



