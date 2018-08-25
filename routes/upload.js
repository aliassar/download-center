var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'public/images/uploads')
    },
    filename: (req, file, callback) => {
      callback(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});


router.post('/', upload.single('image'), (req, res, next) => {
    // console.log(req.query.name);
    // res.status(200).send();
    res.send();
    // MongoClient.connect(url, (err, db) => {
    //     assert.equal(null, err);
    //     insertDocuments(db, 'public/images/uploads/' + req.file.filename, () => {
    //         db.close();
    //         res.json({'message': 'File uploaded successfully'});
    //     });
    // });
});

module.exports = router;
