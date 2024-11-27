const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temporary/temp.txt", "Line 1\n");
    await writeFile("./temporary/temp.txt", "Line 2\n", { flag: "a" });
    await writeFile("./temporary/temp.txt", "Line 3\n", { flag: "a" });
  } catch (error) {
    console.log("Error writing to file", err);
  }
};
const reader = async () => {
    try {
       const data = await readFile("./temporary/temp.txt", 'utf8',);
       console.log("File content:\n", data);
    } catch (error) {
        console.log("Error reading data:", err);
    }
}
const readWrite = async () => {
    try {
        await writer();
        await reader();
        console.log("writer and reader finished");
    } catch {
        console.error("Error running readWrite");
    }
} 
readWrite();