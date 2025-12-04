import * as commentsModel from "../models/comments.js";

export async function getAllComments(req, resp){
    const data = await commentsModel.getAllComments();
    resp.json({
        data : data,
        });
}

export async function getCommentsById(req , resp) {
    const data = await commentsModel.getCommentsById(req.params.id);
    if (data == undefined){
        resp.json({
            sucess: false,
            data: "Comment not found",
        })
    } else {
    resp.json({
        data: {
            id_participations: data.id_participations,
            user_id: data.user_id,
            content: data.content,
            date_comments: data.date_comments,
            is_visible: data.is_visible,
        },
      })
    }
}

export async function updateComments(req, resp) {
    const data = await commentsModel.updateComments(req.body.content ,req.params.id)
    resp.json({
        success: true,
        message: `Votre commentaire a bien été modifié.`
      })
}

export async function subComments(req , resp){
    const data = await commentsModel.subComments(req.body.id_participations ,req.body.content)
    resp.json ({
        success: true,
        message: `Votre commentaire a bien ajouté.`
    })
}