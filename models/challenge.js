import db from "../database.js";

export async function getCurrentChallenge(){
    const row = db.getrow('SELECT * FROM challenge WHERE date_start < now() AND date_end > now()')
    return row;
}

export async function subChallenge(title_theme, description_theme, picture, date_start, date_end){
    const row = db.execute('INSERT INTO challenge (title_theme, description_theme, picture, date_start, date_end) VALUES (? , ? , ? ,?, ?)' ,[title_theme, description_theme, picture, date_start, date_end]);
    return row;
}