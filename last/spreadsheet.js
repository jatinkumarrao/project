const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./data-3c155f5283bc.json');

async function accessSpreadsheet(){
const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
await promisify(doc.useServiceAccountAuth)(creds);
const info = await promisify(doc.getInfo)();
const sheet = info.worksheets[0];
 
sheets.spreadsheets.batchUpdate({
    auth: "https://accounts.google.com/o/oauth2/auth",
    spreadsheetId:"1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw ",
    requestBody: {
        requests: [{
            updateCells: {
                range: {
                    sheetId: 0,
                    startRowIndex: 0,
                    endRowIndex: 3,
                    startColumnIndex:0,
                    endColumnIndex: 3,
                },
                fields: 'name'
                rows: [{
                    values: [{
                        userEnteredValue: {
                            stringValue: 'arunnnarunnn',
                        },
                    }],
                }],
            },
        }],
    },
});
 }

 accessSpreadsheet();