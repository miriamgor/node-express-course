const fs = require('fs');

fs.createReadStream('../content/big.txt', 'utf8');

const stream = fs.createReadStream('../content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 50000
})

let counter = 0;
stream.on('data', (chunk) => {
    counter++;
    console.log(`Received chunk #${counter}`);
    console.log(chunk);
});
stream.on('end', ()=> {
    console.log(`End. Received: ${counter}`);
});
stream.on('error', (err)=> {
    console.log("Error!: ", err);
});

