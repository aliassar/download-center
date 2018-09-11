var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/uploads')
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname + '-' + Date.now())
    }
});

var upload = multer({storage: storage});

router.post('/', upload.single('filename'), (req, res, next) => {
    console.log(req.file.originalname)
    res.send("uploaded")
    // res.status(200).send();
    // MongoClient.connect(url, (err, db) => {
    //     assert.equal(null, err);
    //     insertDocuments(db, 'public/images/uploads/' + req.file.filename, () => {
    //         db.close();
    //         res.json({'message': 'File uploaded successfully'});
    //     });
    // });
});

module.exports = router;
