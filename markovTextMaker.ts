const fs = require('fs');

const client = new XMLHttpRequest();
const files = fs.readdirSync('/assets/photos/');

function textMaker(files) {
    let fullString = ''

    client.open('GET', '/foo.txt');
    client.onreadystatechange = function() {
    alert(client.responseText);
    }
    client.send();
    return fullString
}