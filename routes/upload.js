var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');

router.get('/', (req, res) => {
  res.render('upload')
});
// var storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//       callback(null, 'public/uploads')
//     },
//     filename: (req, file, callback) => {
//       callback(null, file.originalname + '-' + Date.now())
//     }
// });

// var upload = multer({storage: storage});

// router.post('/', upload.single('filename'), (req, res, next) => {
//   var dir = path.join(__dirname , '..' , 'public' , 'uploads' , req.user.username);
//   if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
//   }
//   var oldPath = req.file.path;
//   var newPath = path.join(dir, path.basename(req.file.path));

//   fs.rename(oldPath, newPath, err => {
//       if (err) return console.error(err);
//       console.log('success!');
//   });
//   fs.readdir(dir, (err, filenames) => {
//     res.render('upload', {filenames});
//   });
//     res.status(200).send();
//     res.redirect('/upload');
    
// });

module.exports = router;
