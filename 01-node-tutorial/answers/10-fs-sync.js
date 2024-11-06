const { readFileSync, writeFileSync } = require("fs");
const filePath = "./temporary/fileA.txt";

writeFileSync(filePath, `This is line #1.\n`);
writeFileSync(filePath, `This is line #2.\n`, { flag: "a" });
writeFileSync(filePath, `This is line #3.\n`, { flag: "a" });

const fileContent = readFileSync(filePath, "utf-8");
console.log("File contents:\n" + fileContent);
