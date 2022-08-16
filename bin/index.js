#! /usr/bin/env node

import { generate } from './utils.js';
import { exec } from 'node:child_process';

await generate();  // Generates folders and files for a MVC project

// Initialize a git repository
exec('git init', (err, stdout, stderr) => {  
    if (err) {
        throw new Error(err);
    }

    console.log(stdout);
    console.log(stderr);
});

