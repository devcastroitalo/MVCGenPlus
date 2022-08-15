import { mkdir } from 'node:fs';
import * as fs from 'node:fs';
import { _htmlTemplate, _resetCssTemplate } from './templates.js';

/*
* Generate a dir based on path passed as argument
* @param {String} dir new dir path
*/
function _createDir(dir) {
    mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log(`> ${dir} folder generated`);
        }
    });
}

function _generateFile(filePath, template) {
    fs.writeFile(filePath, template, (err) => {
        if (err) {
            throw new Error(err);
        } else {
            console.log(`> ${filePath} generated`);
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

    // Generate CSS files
    _generateFile('./assets/css/reset.css', _resetCssTemplate());
    _generateFile('./assets/css/index.css', '');

    // Generate HTML file
    _generateFile('index.html', _htmlTemplate());
}

export { generate };

