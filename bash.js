//var fs = require("fs");
//var nodemon=require('nodemon';)
var currentPath = process.cwd();
process.stdout.write("prompt>");
process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    process.stdout.write(currentPath);
  } else {
    process.stdout.write("You typed:" + cmd);
  }
  process.stdout.write("\nprompt>");
});

//console.log(currentPath);
// fs.readFile(currentPath + "\\text.txt", function(err, data) {
//   if (err) console.log(err);
//   else console.log(data.toString());
// });
