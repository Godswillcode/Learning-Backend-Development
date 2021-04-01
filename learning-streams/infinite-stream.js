const fs = require('fs');

const godswill = fs.createReadStream('/Desktop/');
let size = 0;
godswill.on('data', (data) => {
size += data.length;
console.log('File size', size);
})