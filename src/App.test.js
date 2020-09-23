import JSONSchema from 'jsonschema';
import fs from 'fs';
import path from 'path';

const Validator = JSONSchema.Validator;

const getDirectory = async dir => {
  const pathname = path.resolve(__dirname, '../public', dir);
  const directories = await fs.promises.readdir(pathname);

  return directories;
};

const getIndexFile = async dir => {
  const pathname = path.resolve(__dirname, '../public/data', dir, 'index.json');
  const index = require(pathname);

  return index;
};

const getCountyFile = async (state, file) => {
  const pathname = path.resolve(__dirname, '../public/data', state, file);
  const countyFile = require(pathname);

  return countyFile;
};

test('Validates index.json data', async () => {
  const schema = {
    id: '/Index',
    type: 'array',
    validateItems: {
      items: {
        type: 'object',
        properties: {
          adminarea: {
            type: 'string'
          },
          shortname: {
            type: 'string'
          }
        }
      }
    }
  };
  const v = new Validator();
  v.addSchema(schema, '/Schema');

  const dirs = await getDirectory('data');

  for (let i = 0; i < dirs.length; i++) {
    const stateDirectory = dirs[i];

    const indexJson = await getIndexFile(stateDirectory);
    const result = v.validate(indexJson, schema);

    expect(result.errors).toHaveLength(0);
  }
});

test('Validates individual state data', async () => {
  /*
  "adminarea": "Albany",
  "urlvbmdropboxes": "http://app.albanycounty.com/boe/voterinfo/",
  "urlearlyvoting": "http://app.albanycounty.com/boe/voterinfo/",
  "flagboxes": 0,
  "shortname": "albany"
  */
  const schema = {
    id: '/State',
    type: 'object',
    properties: {
      adminarea: {
        type: 'string'
      },
      shortname: {
        type: 'string'
      },
      urlvbmdropboxes: {
        type: 'string'
      },
      urlearlyvoting: {
        type: ['string', 'null']
      },
      flagboxes: {
        type: 'number'
      }
    }
  };

  const v = new Validator();
  v.addSchema(schema, '/StateSchema');

  const dirs = await getDirectory('data');
  for (let i = 0; i < dirs.length; i++) {
    const stateDirectoryName = dirs[i];

    const stateDirectoryFiles = await getDirectory(
      `data/${stateDirectoryName}`
    );

    for (let j = 0; j < stateDirectoryFiles.length; j++) {
      const countyFilename = stateDirectoryFiles[j];

      if (countyFilename === 'index.json') {
        continue;
      }
      const file = await getCountyFile(stateDirectoryName, countyFilename);

      const result = v.validate(file, schema);

      if (result.errors.length > 0) {
        console.log(
          'ERROR in State: ',
          stateDirectoryName,
          'FILE: ',
          countyFilename
        );
      }
      expect(result.errors).toHaveLength(0);
    }
  }
});
