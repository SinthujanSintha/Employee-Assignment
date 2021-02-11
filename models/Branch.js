var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var BranchSchema = new Schema({
    employee:[{
        type:Schema.Types.ObjectId,
        ref:"Employee"
    }],
    branch_name: {
        type: String,
        required: true
    },
    branch_address: {
        type: String,
        required: true
    }

});

module.exports = Branch= mongoose.model("Branch", BranchSchema)