import * as participationsModel from "../models/participations.js";

export async function deleteParticipations(req, resp) {
    const data = await participationsModel.delParticipations(req.params.id)
    resp.json({
        success: true,
        message: `Participation bien supprimée.`
    })
}

export async function getParticipationById(req, resp) {
    const data = await participationsModel.getParticipationById(req.params.id)
    if (data == undefined) {
        resp.json({
            success: false,
            data: "Participations not find"
        })
    } else {
        resp.json({
            success: true,
            data: {
                id: data.id,
                user_id: data.user_id,
                id_challenge: data.id_challenge,
                picture_update_url: data.picture_update_url,
                date_submission: data.date_submission,
                is_active: data.is_active,
            }
        });
    }
}

export async function getParticipationByFilter(req, resp) {
    let result;
    if (req.query.id_challenge) {
        result = participationsModel.getParticipationByChallenge(req.query.id_challenge);
    } else if (req.query.date_submission) {
        result = participationsModel.getParticipationsByDate(req.query.date_submission);
    } else if (req.query.user_id) {
        result = participationsModel.getParticipationByUserId(req.query.user_id);
    }
    const data = result;
    resp.json({
        data: {
            id: data.id,
            user_id: data.user_id,
            id_challenge: data.id_challenge,
            picture_update_url: data.picture_update_url,
            date_submission: data.date_submission,
            is_active: data.is_active,
        }
    });
}

export async function subParticipations(req, resp) {
    const data = await participationsModel.subParticipations(req.body.id_challenge, req.body.picture_updated_url)
    resp.json({
        success: true,
        message: `Participations bien ajouté.`
    })
}