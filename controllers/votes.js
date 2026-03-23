import * as votesModel from "../models/votes.js";

export async function getAllVotes(req, resp) {
    const data = await votesModel.getAllVotes();
    resp.json({
        data : data
    });
}

export async function getVotesByFilter(req, resp) {
    let data = {};
    if (req.query.id_participation){
        data = await votesModel.getVotesByIdParticipations(req.query.id_participation);
    } else if (req.query.user_id){
        data = await votesModel.getVotesByUserId(req.query.user_id);
    } else {
        data = await votesModel.getAllVotes();
    } if (data == undefined) {
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
    const data = await votesModel.subVotes(req.body.id_participations, req.body.user_id ,req.body.note_creativity, req.body.note_on_theme, req.body.note_technique)
    resp.json({
        success: true,
        message: `Votes bien ajouté.`
    })
}



