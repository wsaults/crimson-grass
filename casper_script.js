// casperjs --web-security=no casper_script.js


var casper = require('casper').create({
    pageSettings: {
        webSecurityEnabled: false
    }
});
var http = require('http');
var fs = require('fs');
casper.start('http://gov.bexar.org/dc/dcrecords.html');

casper.then(function() {

    var links = this.getElementsInfo('#mainContent a');
    // var fs = require('fs');
    // links.forEach(function(link) {
    //     var url = link.attributes.href;
    //     var name = url.substr(url.lastIndexOf('/') + 1)
    //     this.download(url, fs.workingDirectory+'/files/'+name);
    // });

    var firstLink = links[0]
    var url = firstLink.attributes.href;
    var fs = require('fs');
    var name = url.substr(url.lastIndexOf('/') + 1)
    this.download(url, fs.workingDirectory+'/files/'+name);
});

casper.run();