const fs = require('fs')
const godswill = fs.createReadStream('./file.txt');
async function run() {
    for await (const chunk of godswill) {
        console.log('Read chunk:', chunk);
    }
    console.log('No more data');
}

run()