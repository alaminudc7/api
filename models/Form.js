const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  certificateno: { type: String, required: true },
  idType: [String],
  nationalid: String,
  birthno: String,
  passportno: String,
  nationality: { type: String, default: 'Bangladeshi' },
  name: String,
  dob: String,
  gender: String,
  vaccination1: { date: String, name: String },
  vaccination2: { date: String, name: String },
  vaccination3: { date: String, name: String },
  vaccinationcenter: String,
  vaccinationby: String,
  totaldosegiven: String,
  verifyqrcode: String,
});

module.exports = mongoose.model('Form', formSchema);
