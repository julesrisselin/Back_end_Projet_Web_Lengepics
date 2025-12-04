import db from "../database.js";

export async function delParticipations(Id) {
    const row = db.delete('DELETE FROM participations WHERE id = ?', [Id])
    return row;
}

export async function getParticipationById(Id) {
    const row = db.getrow('SELECT * FROM participations WHERE id = ?', [Id])
    return row;
}

export async function getParticipationByChallenge(id_challenge) {
    const row = db.getrow('SELECT * FROM participations WHERE id_challenge = ?', [id_challenge])
    return row;
}

export async function getParticipationByUserId(user_id) {
    const row = db.getrow('SELECT * FROM participations WHERE user_id = ?', [user_id])
    return row;
}

export async function getParticipationsByDate(date_submission) {
    const row = db.getrow('SELECT * FROM participations WHERE date_submission = ?', [date_submission])
    return row;
}

export async function subParticipations(id_challenge ,picture_updated_url){
    const row = db.execute('INSERT INTO participations (id_challenge, picture_updated_url) VALUES (?,?)' ,[id_challenge ,picture_updated_url]);
    return row;
}