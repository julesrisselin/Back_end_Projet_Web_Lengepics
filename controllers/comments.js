import * as commentsModel from "../models/comments.js";

export async function getAllComments(req, resp){
    console.log("test1")
    const data = await commentsModel.getAllComments();
    resp.json({
        data : data,
        });
}

export async function getCommentsByIdPart(req , resp) {
    const id_part = req.params.id.split("=");
    const data = await commentsModel.getCommentsByIdPart(id_part[1]);
    if (data == undefined){
        resp.json({
            sucess: false,
            data: "Comment not found",
        })
    } else {
    resp.json({
        data: data
      })
    }
}

export async function getCommentsbyUserId(req , resp) {
    console.log(req.params);
    const user_id = req.params.user_id.split("=");
    const data = await commentsModel.getCommentsByIdPart(user_id[1]);
    if (data == undefined){
        resp.json({
            sucess: false,
            data: "Comment not found",
        })
    } else {
    resp.json({
        data: data
      })
    }
}


export async function getCommentsByFilter(req, resp) {
    let result = {} ;
    if (req.query.id_participation) {
        result = await commentsModel.getCommentsByIdPart(req.query.id_participation);
    } else if (req.query.user_id) {
        result = await commentsModel.getCommentsbyUserId(req.query.user_id);
    } else {
        result = await commentsModel.getAllComments()
    }
    const data = result;
    resp.json({
        data : data 
    });
}

export async function moderateComments(req, resp) {
    const data = await commentsModel.moderateComments(req.body.is_visible, req.body.id)
    resp.json({
        success: true,
        message: `Le commentaire est bien plus affiché.`
      })
}

export async function subComments(req , resp){
    if (req.body.content == ""){
        resp.json({
            success: false,
            message: `Le commentaire est vide`
        })
        return ;
    }
    try {
    const data = await commentsModel.subComments(req.body.id_participations, req.user.id ,req.body.content)
    }catch (error) {
        resp.json({
            success: false,
            message: `Vous avez déjà poster un commentaire`
        });

        return;
    }
    resp.json ({
        success: true,
        message: `Votre commentaire a bien ajouté.`
    })
}