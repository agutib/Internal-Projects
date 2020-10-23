const router = require("express").Router();
const Login = require("./services/login");
const Employee = require("./services/employee");
const Util = require("./index/util");
const jwt = require("jsonwebtoken");
const { route } = require(".");

router.use(function(req, res, next){

    let token = req.body.token || req.query.token || req.header["x-token-access"];

    if(token){

        jwt.verify(token, app.get("#"), function(err, decode){
            if(err){
                return res.json({
                    success : false,
                    message : "Authentication Token is Invalid."
                });
            }else {
                req.decode = decode;
                next();
            }
        });
    }else if(req.path === "/login"){
        next();
    }else{
        return res.status(403).send({
            success : false,
            message : "No Token Provided."
        });
    }

});
router.post("/login", Login.loginCheck);
router.post("/getEmployees", Employee.geEmployees);
router.post("/saveEmployee", Employee.saveEmployee);
router.delete("/deleteEmployee", Employee.deleteEmployee);
router.get("/getData", Employee.getData);
router.get("/logout", Employee.logout);

module.exports = router;

// router.use(CookieSession({
//     secret : 'session',
//     resave : false,
//     initializedSave : true 
// }))
// router.use(function(req,res,next)){
//     let _send = res._send;
//     const sent = false;
//     res._send = 
// }