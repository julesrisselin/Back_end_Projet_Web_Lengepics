import db from "../database.js";

export async function delParticipations(id) {
    const row = db.execute('UPDATE participations SET is_active = 0 WHERE id = ?', [id])
    return row;
}

export async function getParticipationById(id) {
    const row = db.getrow('SELECT * FROM participations WHERE id = ?', [id])
    return row;
}

export async function getAllParticipation(){
    const row = db.getall('SELECT * FROM participations')
    return row;
}

export async function getParticipationByChallenge(id_challenge) {
    const row = db.getall('SELECT * FROM participations WHERE id_challenge = ?', [id_challenge])
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

export async function subParticipations(user_id, id_challenge ,filepath){
    const row = db.execute('INSERT INTO participations (user_id ,id_challenge, picture_updated_url) VALUES (?,?,?)' ,[user_id ,id_challenge ,filepath]);
    return row;
}