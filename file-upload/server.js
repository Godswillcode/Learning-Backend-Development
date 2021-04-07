const fs = require('fs');
const http = require('http');
const path = require('path');

const form = fs.readFileSync(path.join(__dirname, "public", "form.html"));
const formidable = require("formidable");
const port = 3005

http.createServer((req, res) => {
    if(req.method === 'GET') {
        get(res);
        return;
    }
    if(req.method === 'POST') {
        post(req, res);
        return
    }
    error(405, res)
})
.listen(port, console.log(`We are running live now on port ${port}`))

function get(res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    res.end(form);
}

function error(code, err) {
    res.statusCoden = code;
    res.end(http.STATUS_CODES[code]);
}

function post(req, res) {
   if(!/multipart\/form-data/.test(req.headers["content-type"]))
   {
       error(415, res);
       return;
   }
   
const form = formidable({
    multiples: true,
    uploadDir: "./uploads/",
});

form.parse(req, (err, fields, files) => {
    if(err) return err;
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({fields, files}))
})
}
