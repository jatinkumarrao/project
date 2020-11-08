const {google} = require('googleapis');
var sheets = google.sheets('v4');

authorize(function(authClient) {
  var request = {
    // The ID of the spreadsheet to update.
    spreadsheetId: '1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw',  // TODO: Update placeholder value.

    resource: {
      // How the input data should be interpreted.
      valueInputOption: 'name',  // TODO: Update placeholder value.

      // The new values to apply to the spreadsheet.  If more than one range is
      // matched by the specified DataFilter the specified values will be
      // applied to all of those ranges.
      data: [ankit],  // TODO: Update placeholder value.

      // TODO: Add desired properties to the request body.
    },

    auth: authClient,
  };

  sheets.spreadsheets.values.batchUpdateByDataFilter(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  });
});

function authorize(callback) {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/spreadsheets'
  var authClient = null;

  if (authClient == null) {
    console.log('authentication failed');
    return;
  }
  callback(authClient);
}