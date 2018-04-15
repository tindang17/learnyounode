let path = require('path');
let pathname = process.argv[2];
let ext = `.${process.argv[3]}`;
let fs = require('fs');
fs.readdir(pathname, function(err, list) {
 list.forEach(file => {
  if(path.extname(file) === ext){
   console.log(file);
  }
 })
})
