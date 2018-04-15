const http = require("http");
const url = process.argv[2];
let data = [];
http
  .get(url, response => {
    response.setEncoding("utf8");
    response
      .on("data", chunk => {
        data.push(chunk);
      })
      .on("end", () => {
        data = data.join('');
        console.log(data.length);
        console.log(data);
      });
  })
  .on("error", console.error);
