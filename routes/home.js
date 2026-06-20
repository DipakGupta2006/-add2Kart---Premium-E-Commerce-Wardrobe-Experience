const express = require("express");
const router = express.Router();
const pool = require("../db");
const isAuthenticated = require("../middleware/auth");

router.get("/home", isAuthenticated , async(req,res)=>{
    try{
        const [rows] = await pool.query("SELECT * FROM banners LIMIT 1");
        res.render("home",{banner: rows[0]});
    }
    catch(error){
        console.log(error);
        res.send("Server Error");
    }
});


module.exports = router;
