const { readExcelController } = require('./excelController');
const { readExcelControllers } = require('./excelControllers');

const express = require('express');

const router = express.Router();

router.get('/readExcel', readExcelController);
router.get('/readExcels', readExcelControllers);

module.exports = router;
