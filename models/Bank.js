var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var BankSchema = new Schema({
    branch:[{
        type:Schema.Types.ObjectId,
        ref:"Branch"
    }],
    bank_name: {
        type: String,
        required: true
    },

});

module.exports = Bank =mongoose.model("Bank", BankSchema)