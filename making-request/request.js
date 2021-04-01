const http = require('http');

http.get('http://example.com', (res) => res.pipe(process.stdout))

// const payload = `{
//     "name": "Godswill",
//     "job": "Front end developer"
// }    
// `;

// const opts = {
//    method: "POST",
//    hostname: "postman-echo.com",
//    path: "/post",
//    header: {
//        "Content-Type": "application/json",
//        "Content-Length": Buffer.byteLength(payload),
//    },
// };

// const req = http.request(opts, (res) => {
//  process.stdout.write("Status Code: " + res.statusCode + "\n");
//  process.stdout.write("Body: ");
//  res.pipe(process.stdout);
// });

// req.on("error", (err) => console.error("Error: ", ree));
// req.end(payload);