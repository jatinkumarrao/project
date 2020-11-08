var delete = function () {
// Print the names and majors of students in a sample spreadsheet:
function listMajors(auth) {
var sheets = google.sheets('v4');
var SPREADSHEET_ID = "************";
var range = "**********";
var sheetId = "****";
var deleteRequest = {
auth: auth,
spreadsheetId: process.env.SPREADSHEET_ID,
resource : {
'requests': [
{
'deleteDimension': {
'range': {
'sheetId': sheetId,
'dimension': 'ROWS',
'startIndex': range,
'endIndex': range+1
}
}
}
]
},
};
sheets.spreadsheets.batchUpdate(deleteRequest, function(err, response) {
if (err) {console.log(err);}
console.log(response,'Deleted');
});
}
// Load client secrets from a local file.
fs.readFile(SPREADSHEET_JSON_FILE, function processClientSecrets(err, content) {
if (err) {
console.log('Error loading client secret file: ' + err);
return;
}
// Authorize a client with the loaded credentials, then call the
// Google Sheets API.
authorize(JSON.parse(content), listMajors);
});
}
//TODO: Delete operation
delete()