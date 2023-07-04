const fs = require("fs");

// Blocking module
const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `this is already written ${textIn} but I am overwriting it at ${Date.now()}`;
fs.writeFileSync("./starter/txt/output.txt", textOut);
console.log("file created");

// Non-Blocking module
fs.readFile("./starter/txt/input.txt", "utf-8", (data, err) => {
  console.log(data);
});
console.log("reading file");
