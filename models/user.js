import db from "../database.js";

export async function getUser(id){
    const row  = await db.getrow('SELECT email , name , firstname, date_inscription FROM user WHERE Id = ?', [id])
    return row;
}

export async function updateInfos(Id, email, name, firstname){
    const row = db.execute('UPDATE user SET email = ? , name = ?  , firstname = ? WHERE id = ?,' [email, name, firstname, Id])
    return row;
}

export async function createUser(email, password, name, firstname){
    const row = db.execute('INSERT INTO user (email, password, name, firstname) VALUES (? ,?, ?, ?)' ,[email, password, name, firstname]);
    return row;
}

export async function getUserByMail(email){
    const row = db.getrow('SELECT * FROM user WHERE email = ?' ,[email]);
    return row;
}