import { mkdir } from 'node:fs';
import * as fs from 'node:fs';

function _createDir(dir) {
    mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw new Error(err);
        }
    });
}

function _htmlTemplate() {
    return `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>

    <body>

    </body>
</html>
    `;
}

function _generateHtml() {
    fs.writeFile('index.html', _htmlTemplate(), (err) => {
        if (err) {
            throw new Error(err);
        }
    });
}

function generate() {
    // Generate css folder
    _createDir('assets/css');

    // Generate js folder
    _createDir('assets/js/models');
    _createDir('assets/js/views');
    _createDir('assets/js/controller');
    _createDir('assets/js/services');
    _createDir('assets/js/daos');
    _createDir('assets/js/helpers');

    // Generate html standard file
    _generateHtml();
}

export { generate };

