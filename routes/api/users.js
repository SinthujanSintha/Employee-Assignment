const express = require("express");
const router = express.Router();

const Employee = require("../../models/Employee");
const Branch = require("../../models/Branch");
const Bank = require("../../models/Bank");



router.get("/employeeList", async function (req, res) {

    await Bank.findOne().populate({path:'branch', select:'branch_name',
        populate:{path:'employee'   //Collection 3
        }})
        .exec(function (err, bank) {
        res.send(bank);

    })
});

module.exports = router;