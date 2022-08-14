import { mkdir } from 'node:fs';
import * as fs from 'node:fs';

/*
* Generate a dir based on path passed as argument
* @param {String} dir new dir path
*/
function _createDir(dir) {
    mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw new Error(err);
        }
    });
}

/*
 * Return a html template to be written in html file
 * @returns _ a string template with the deafult html file
 */
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

/*
 * Generate html file
 */
function _generateHtml() {
    fs.writeFile('index.html', _htmlTemplate(), (err) => {
        if (err) {
            throw new Error(err);
        }
    });
}

/*
 * Function that call the generators functions and create the MVC structure
 */
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

