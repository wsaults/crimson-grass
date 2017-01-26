let http = require('http');
let fs = require('fs');
let path = require('path')
let childProcess = require('child_process')
let phantomjs = require('phantomjs')
let binPath = phantomjs.path

let childArgs = [
    path.join(__dirname, 'test_script.js')
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    let links = JSON.parse(stdout);

    links.forEach((link) => {
        let savePath = path.join(__dirname, 'files', link.substr(link.lastIndexOf('/') + 1));
        let file = fs.createWriteStream(savePath);

        http.get(link, function(response) {
            response.pipe(file);
        });
    })
});
