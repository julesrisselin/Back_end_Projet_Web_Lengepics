export function errorHandler(err, req, resp, next) {
    console.error(err)
    if (err.code == "LIMIT_FILE_SIZE") {
        resp.status(400).json({
            message: "Fichier trop volumineux pour l'upload"
        })
    } else {
        resp.status(500).json({
            message: "Erreur serveur"
        })
    }
}