/**
 * Reasoning:
 * - the “main” parameter in package.json. Remember, the files that will become an NPM package sit inside an Expo project.
 * - Expo projects require main to be equal to “node_modules/expo/AppEntry.js” in order to run as an Expo project.
 * - However, that won’t work for an NPM package which must be a JavaScript file contained in the package, and typically is set to “index.js”.
 * - This means that the “main” value must change prior to NPM publishing and then change again prior to running the Expo application that encompasses the package.
 */

const editJsonFile = require('edit-json-file');

// If the file doesn't exist, the content will be an empty object by default.
const file = editJsonFile(`package.json`);

// Set a couple of fields
file.set('main', 'src/index.ts');

file.save();
