const { Schema, model } = require('mongoose');
const session = require('express-session');

const sessionSchema = new Schema({}, { timestamps: true });

const Session = model('Session', sessionSchema);
module.exports = Session;