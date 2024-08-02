// routes/otpRoutes.js
const express = require('express');
const otpController = require('../controllers/otpController');
const router = express.Router();
router.post('/send-otp', otpController.sendOTP);
// TODO: à revoir plutard (utiliser un get plutôt)
router.post('/verify-otp', otpController.findOTP);
module.exports = router;