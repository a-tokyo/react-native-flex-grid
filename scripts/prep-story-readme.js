const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');

const main = () => {
  /** Readme text */
  const readmeFile = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8');
  
  /** Modified Story file text */
  const storyFileText = `<Meta title="README" />

//This file is auto generated from README.md -- any manual changes will be discarded

${readmeFile.replaceAll(`${packageJson.homepage}/`, '/')}`;
  
  /** Write story file */
  fs.writeFileSync(path.join(__dirname, '../src/README.stories.mdx'), storyFileText, 'utf8');
};

main();
