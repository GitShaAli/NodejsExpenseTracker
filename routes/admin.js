const path = require('path');

const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/signup', adminController.signup);

module.exports = router;