const { writeFile } = require("fs");

console.log("start");

writeFile("./temporary/fileB.txt", `Line 1\n`, (err)=> {
    console.log('point 1');
    if (err) {
        console.error("Error writing line 1:", err);
    } else {
        writeSecondLine();
    }
})

function writeSecondLine(){
    writeFile("./temporary/fileB.txt", `Line 2\n`, { flag: "a"}, (err)=> {
        console.log('point 2');
        if (err) {
            console.error("Error writing line 2:", err);
        } else {
            writeThirdLine();
        }
    })
}

function writeThirdLine(){
    writeFile("./temporary/fileB.txt", `Line 3\n`, { flag: "a"}, (err)=> {
        console.log('point 3');
        if (err) {
            console.error("Error writing line 3:", err);
        } else {
            return;
            
        }
    })
}
console.log("the end");


// writeFile(
//   "./temporary/fileB.txt",
//   `This is the first line!\n`,
//   (err, result) => {
//     console.log("marker 1 callback for first line");
//     if (err) {
//       console.error("Error writing line 1:", err);
//     } else {
//       writeFile(
//         "./temporary/fileB.txt",
//         `This is the second line!\n`,
//         { flag: "a" },
//         (err, result) => {
//           console.log("marker 2");
//           if (err) {
//             console.error("Error writing line 2:", err);
//           } else {
//             writeFile(
//               "./temporary/fileB.txt",
//               `This is the third line!\n`,
//               { flag: "a" },
//               (err, result) => {
//                 console.log("marker 3");
//                 if (err) {
//                   console.log("Error writing line 3:", err);
//                 } else {
//                   result;
//                 }
//               }
//             );
//           }
//         }
//       );
//     }
//   }
// );
