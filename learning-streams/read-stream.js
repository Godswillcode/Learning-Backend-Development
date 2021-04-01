const fs = require('fs');

const godswill = fs.createReadStream('./file.txt');
godswill.on('data', (data) => {
    console.log('Read chunk:', data.toString());
})

godswill.on('end', () => {
    console.log('No more data.');
})