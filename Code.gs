function doGet(e) {
  console.log(e);
  var form = HtmlService.createTemplateFromFile('form.html');

  if (e.parameters.lang == "en") {
    form.language = "en";
  }else{
    form.language = "lv";
  }

  return form.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}

function saveAdjustments(values) {
  let spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZucfhdGvUj1TtBM3OqbwIeh3yoG9yV2PbWj5jZuWR3c/edit#gid=0");
  let worksheet = spreadsheet.getSheetByName("Adjustments");
  worksheet.appendRow(values);
  return;
}
function saveRating(values) {
  let spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZucfhdGvUj1TtBM3OqbwIeh3yoG9yV2PbWj5jZuWR3c/edit#gid=0");
  let worksheet = spreadsheet.getSheetByName("Rating");
  worksheet.appendRow(values);
  return;
}
function saveUserValues(values) {
  let spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZucfhdGvUj1TtBM3OqbwIeh3yoG9yV2PbWj5jZuWR3c/edit#gid=0");
  let worksheet = spreadsheet.getSheetByName("User");
  worksheet.appendRow(values);
  return;
}

function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function getUserId(d) {

  let spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZucfhdGvUj1TtBM3OqbwIeh3yoG9yV2PbWj5jZuWR3c/edit#gid=0");
  let worksheet = spreadsheet.getSheetByName("ID");
  let allID = worksheet.getRange(1, 2, worksheet.getRange("B1").getDataRegion().getLastRow(), 1).getValues();
  let lastrow = worksheet.getRange("B1").getDataRegion().getLastRow();
  let id = worksheet.getRange(lastrow, 1, lastrow, 1).getValue();
  id++;
  worksheet.appendRow([id, d]);
  
  return id;
}