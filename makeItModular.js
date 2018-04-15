let pathname = process.argv[2];
let ext = process.argv[3];
let handleData = require("./handleData");
function printFiles (err, data) {
  if (err) {
    console.log("there is an error");
  }
  data.forEach(file => console.log(file));
}
handleData(pathname, ext, printFiles);