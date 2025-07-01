const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    salary: Number,
    laguage: String,
    city: String,
    isManager: Boolean
});

const Employee = mongoose.model('employee', schema);
module.exports = Employee;