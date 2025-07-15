const MyModel = require("../modulas/student");
const express = require("express");
const route = express.Router();
const {handleinsert, gethandle, handledelete, handleUpdate, handleLogin, handleverify} = require("../controllers/student_logic");

// Insert Api
route.post("/", handleinsert);

//login api
route.post("/login", handleLogin);

route.post("/verify", handleverify);

// Get Api
route.get("/", gethandle);

// Delete Api 
route.delete("/:id", handledelete);

// Update Api 
route.patch("/:id", handleUpdate);

// Single Data
route.get("/:id", async(req, res) => {
    try {
        var data = await MyModel.findById(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Data retrieved successfully",
            data
        });
    } 
    catch (error) {
        res.status(401).json({
            status: "error",
            error
        });
    }
});

module.exports = route;
