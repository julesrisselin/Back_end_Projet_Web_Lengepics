import multer from 'multer';

const storage = multer.diskStorage({
    destination: './public/upload/',
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const name_file = file.originalname.split(".")[0];
        cb(null, name_file + '.' + file.originalname.split(".")[1])
    }
})

export const upload = multer({ 
    storage: storage,

 })

