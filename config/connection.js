//make the connection
const mysql = require("mysql");

//EDIT THIS IF SOMETHING ISNT WORKING BC USUALLY THIS IS THE PROBLEM!!!!
const connection;
   if (process.env.JAWSDB_URL){
       connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: "localhost",
            port: 8889, 
            user: "root",
            password: "root",
            database: "burgers_db"
        });
    };
    

//export
module.exports = connection