const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EmployeeSchema = new Schema({
    emp_name: {
        type: String,
        required: true
    },
    emp_email: {
        type: String,
        required: true
    },
    emp_photo:{
        type:String,
        required:false
    },
    emp_password: {
        type: String,
        required: true
    }
});
module.exports = Employee = mongoose.model("Employee", EmployeeSchema);