const fs = require("fs");

// Blocking module, synchronous way
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `this is already written ${textIn} but I am overwriting it at ${Date.now()}`;
// fs.writeFileSync("./starter/txt/output.txt", textOut);
// console.log("file created");

// Non-Blocking module , asynchronous way
fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`, "utf-8", (err, data3) => {
            console.log(data3);
            fs.writeFile('./starter/txt/final.txt', `I am adding ${data2} data 2 \n and ${data3} data3 `, "utf-8", err =>{
                console.log('file have been written')
            })
          });


      });

});
console.log("reading file");
