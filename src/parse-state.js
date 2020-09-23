#!/usr/bin/node
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const rimraf = require('rimraf');
const promisify = require('util').promisify;

function showUsage() {
  console.log('Automatic state parser');
  console.log(
    'Usage: node parse-state.js --state [2 character abbrev] --json /path/to/file/relative/to/src.json'
  );
  console.log(
    'Optional flags: "--force" overwrites a previously created state directory'
  );
}

function createShortname(string) {
  return string.toLowerCase().replace(' ', '-');
}

const deleteFolder = promisify(rimraf);

(async () => {
  if (!argv.state || !argv.json) {
    showUsage();
    return;
  }
  const state = argv.state.toLowerCase();

  const directoryToCreate = path.resolve(__dirname, `../public/data/${state}`);
  if (fs.existsSync(directoryToCreate) && !argv.force) {
    console.log(
      `[ERROR] State of "${state}" already exists. To overwrite, use the --force flag`
    );
    return;
  }
  const json = require(path.resolve(__dirname, `${argv.json}`));

  if (Array.isArray(json)) {
    const indexJson = json.map(s => {
      return {
        adminarea: s.adminarea,
        shortname: s.adminarea.toLowerCase().replace(' ', '-')
      };
    });
    if (fs.existsSync(directoryToCreate)) {
      await deleteFolder(directoryToCreate);
    }
    fs.mkdirSync(directoryToCreate);
    fs.writeFileSync(
      `${directoryToCreate}/index.json`,
      JSON.stringify(indexJson, null, 2)
    );

    for (let i = 0; i < json.length; i++) {
      const data = json[i];
      const shortname = createShortname(json[i].adminarea);
      data.shortname = shortname;
      delete data.notes;

      fs.writeFileSync(
        `${directoryToCreate}/${shortname}.json`,
        JSON.stringify(data, null, 2)
      );
    }
  } else {
    console.log(`[ERROR] ${json} is not a valid JSON Array`);
  }
})();
