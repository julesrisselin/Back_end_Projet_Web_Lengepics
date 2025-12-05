import db from "../database.js";

export async function getAllVotes() {
    const row = db.getall('SELECT * FROM votes',)
    return row;
}

export async function getVotesById(id) {
    const row = db.getrow('SELECT * FROM votes WHERE id = ?', [id])
    return row;
}

export async function subVotes(id_participations, user_id , note_creativity, note_on_theme, note_technique){
    const row = db.execute('INSERT INTO votes (id_participations , user_id, note_creativity, note_on_theme, note_technique) VALUES (?,?,?,?,?)' ,[id_participations ,user_id ,note_creativity, note_on_theme, note_technique]);
    return row;
}