const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(burger_data){        
        res.render("index",{burger_data});
    });    
});

router.post("/burgers/update", function(req, res){
    burger.update(req.body.burger_id, function(result){       
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){        
        res.redirect("/");
    });
});

module.exports = router;