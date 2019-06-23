const fs = require('fs')

const client = new XMLHttpRequest();
const files = fs.readdirSync('/textSamples/');

function textMaker(files: {}) {
    let fullString = ''
    const filesLength =  Object.keys(files).length

    for(let i=0; i < filesLength; i++){
        client.open('GET', files[i]);
        client.onreadystatechange = () => {
            alert(client.responseText);
        }
        fullString += client.send();
    }

    return fullString
}

function fullBodyString() {
    textMaker(files)
}