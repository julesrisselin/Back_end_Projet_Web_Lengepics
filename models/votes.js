import db from "../database.js";

export async function getAllVotes() {
    const row = db.getall('SELECT * FROM votes',)
    return row;
}

export async function getVotesById(Id) {
    const row = db.getrow('SELECT * FROM votes WHERE id = ?', [Id])
    return row;
}

export async function subVotes(id_participations , note_creativity, note_on_theme, note_technique){
    const row = db.execute('INSERT INTO votes (id_participations ,note_creativity, note_on_theme, note_technique) VALUES (? ,?, ?, ?)' ,[id_participations ,note_creativity, note_on_theme, note_technique]);
    return row;
}