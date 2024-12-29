const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "Line 1\n")
  .then(() => {
    return writeFile("./temporary/temp.txt", "Line 2\n", { flag: "a" });
  })

  .then(() => {
    return writeFile("./temporary/temp.txt", "Line 3\n", { flag: "a" });
  })

  .then(() => {
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((data) => {
    console.log("Read content\n", data);
  })

  .catch((err) => {
    console.log(err);
  });
  
console.log("exited");
