const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const MyModel = mongoose.model('DATA', studentSchema); //table name & studentSchema = schema for student table
module.exports = MyModel;   