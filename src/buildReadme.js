const fs = require('fs');
const util = require('util');
const config = require("./data/routing-config-map.json");

const DEFAULT_TEXT = `
  # Inkit Node SDK
  
  ## Usage
  \`\`\`js
   const Inkit require("inkit").default
   
   Inkit.apiToken = "xxxxxxxxx"
   
    const resp = await Inkit.Render.getHtml({
      entityId: 'rend_xxxxxxxxxxxxxxxxx'
    })
  \`\`\`
  
  ## Methods
`

function generateColumns (items) {
  return Object.entries(items || {}).reduce((acc, [k, v]) => {
    return acc +  `|\`${k}\`| ${JSON.stringify(v.type)}|${Boolean(v.optional)}|\n`
  }, '');
}

function readmeMethodsDescription(conf) {
  return Object.entries(conf).reduce((acc, [key, value]) => {
    const title = `## ${key} \n`;

    const text = value.routes.reduce((acc, item) => {
      const tableMethodParamsColumn = generateColumns(item.request);
      const tableResponseColumn = generateColumns(item.response);
      const tableQueryParamsColumn = generateColumns(item.queryParams);

      const tableTitle =
        "| Field                         | Type                 | Optional                                                               |\n" +
        "| ----------------------------- | -------------------- | ------------------------------------------------------------------------- |\n";
      return `${acc} 
      \n ### ${item.sdkMethodName} 
      \n #### Method params:
      \n ${tableTitle + tableMethodParamsColumn}
      
      ${item.queryParams ? `
      \n #### Query Params:
      \n ${tableTitle + tableQueryParamsColumn}
      ` : ''}
      
      ${item.response ? `
      \n #### Response type:
      \n ${tableTitle + tableResponseColumn}
      ` : ""
      }
     
      `;
    }, '');

    return `${acc} \n ${title} \n ${text}`;
  }, '');
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated")
  });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
  try {

    await writeFileAsync('README.md', DEFAULT_TEXT + readmeMethodsDescription(config));

  } catch (error) {
    console.log(error);
  }
}

init();