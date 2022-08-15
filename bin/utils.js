import { mkdir } from 'node:fs/promises';
import * as fs from 'node:fs/promises';
import { _htmlTemplate, _resetCssTemplate } from './templates.js';

/**
 * Generate folder
 * @param {String} dir a folder path to be generated
 */
async function _createDir(dir) {
    try {
        await mkdir(dir, { recursive: true });      
        console.log(`> ${dir} folder generated`);
      } catch (err) {
        console.error(err.message);
      }
}

/**
 * Generate file
 * @param {String} filePath file path 
 * @param {String} template file content
 */
async function _generateFile(filePath, template) {
    try {
        await fs.writeFile(filePath, template);
        console.log(`> ${filePath} file generated`);
    } catch(err) {
        throw new Error(err);
    }
}

/*
 * Function that call the generators functions and create the MVC structure
 */
async function generate() {
    // Generate css folder
    await _createDir('assets/css');
    
    // Generate js folder
    await _createDir('assets/js/models');
    await _createDir('assets/js/views');
    await _createDir('assets/js/controller');
    await _createDir('assets/js/services');
    await _createDir('assets/js/daos');
    await _createDir('assets/js/helpers');

    // Generate CSS files
    await _generateFile('assets/css/reset.css', _resetCssTemplate());
    await _generateFile('assets/css/index.css', '');

    // Generate HTML file
    await _generateFile('index.html', _htmlTemplate());
}

export { generate };

