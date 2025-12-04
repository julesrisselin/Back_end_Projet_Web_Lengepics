import db from "../database.js";

export async function getAllComments() {
    const row = db.getall('SELECT * FROM comments',)
    return row;
}

export async function getCommentsById(Id) {
    const row = db.getrow('SELECT * FROM comments WHERE id = ?', [Id])
    return row;
}

export async function updateComments(content, Id){
    const row = db.execute('UPDATE comments SET content = ? WHERE id = ?', [content, Id])
    return row;
}

export async function subComments(id_participations ,content){
    const row = db.execute('INSERT INTO comments (id_participations , content) VALUES (? ,?)' ,[id_participations ,content]);
    return row;
}