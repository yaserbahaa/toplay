const express =require( 'express')
const router = express.Router()
const multer = require('multer');
// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../afrontend/src/img');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });


router.post('/post',upload.single("post"),async(req,res)=>{
    const img = req.file.filename
    const text = req.body.text
    try{
        
    }
    catch{

    }
})



module.exports = router