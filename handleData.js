let path = require("path");
let fs = require("fs");
module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return cb(err);
    }
    let data = list.filter(file => path.extname(file) === `.${ext}`) 
    cb(null, data);
  });
}