var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open('http://gov.bexar.org/dc/dcrecords.html', function(status) {
    var links = page.evaluate(function() {
        return [].map.call(document.querySelectorAll('#mainContent a'), function(link) {
            return link.getAttribute('href');
        });
    });

    console.log(JSON.stringify(links));

    phantom.exit();
});