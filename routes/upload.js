var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');

router.get('/', (req, res) => {
  var username = req.user.username;
  var dir = path.join(__dirname , '..' , 'public' , 'uploads' , username);
  fs.readdir(dir, (err, filenames) => {
    console.log('filenames: ', filenames);
    res.render('upload', { filenames, username });
  });
});

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
  var username = req.user.username;
  var dir = path.join(__dirname , '..' , 'public' , 'uploads' , username);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  var oldPath = req.file.path;
  var newPath = path.join(dir, path.basename(req.file.path));

  fs.rename(oldPath, newPath, err => {
      if (err) return res.render({ message: err.message, ...err });
      fs.readdir(dir, (err, filenames) => {
        console.log('filenames: ', filenames);
        res.render('upload', { filenames, username });
      });
  })
});

module.exports = router;
