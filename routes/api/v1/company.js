const express = require('express');
const router = express.Router();

const companyController = require('../../../controllers/api/v1/company_controller');

//handle company routes
// creating company
router.post('/create', companyController.create);

// getting all the registered company
router.get('/', companyController.getCompanies);

module.exports = router;
