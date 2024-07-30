const xlsx = require('xlsx');

module.exports = {
  readExcelControllers: (req, res) => {
    const workbook = xlsx.readFile('./List-of-Authorised-Persons.xlsx');
    let workbook_sheet = workbook.SheetNames;
    let workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]]
    );
    res.status(200).send({
      message: workbook_response,
    });
  },
};
