const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');

const main = () => {
  /** Readme text */
  const readmeFile = fs.readFileSync(
    path.join(__dirname, '../README.md'),
    'utf8',
  );

  /** Modified Story file text */
  const storyFileText = `<Meta title="README" />

${readmeFile
  // for subpaths
  .replaceAll(`${packageJson.homepage}/`, '/')
  // for main url
  .replaceAll(packageJson.homepage, '/')}`;

  /** Write story file */
  fs.writeFileSync(
    path.join(__dirname, '../src/README.generated.stories.mdx'),
    storyFileText,
    'utf8',
  );
};

main();
