// controllers/otpController.js
const otpGenerator = require('otp-generator');
const OTP = require('../models/otpModel');

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    let otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    await OTP.create(otpPayload);
    return res.status(200).json({code: '200', message: 'Code otp envoyé'});
  } catch (error) {
    return res.status(500).json({code: '500', message: 'envoie impossible'});
  }
};

/**
 * vérifie si le code otp renseigné par l'utilisateur existe.
 *
 * @param {*} req l'objet de la requête envoyé.
 * @param {*} res l'objet de la reponse.
 * @returns les status.
 */
exports.findOTP = async (req, res) => {
  try {
    const { code } = req.body;
    let otp = await OTP.findOne({ otp: code });
    return otp ? 
      res.status(200).json({ message: 'code otp valide', code: otp._id }) : 
      res.status(500).json({ message: 'code otp invalide' });
  } catch (error) {
    return res.status(500);
  }
}