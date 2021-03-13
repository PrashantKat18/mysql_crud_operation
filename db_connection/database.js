var mysql = require('mysql');
var connection = mysql.createPool({
    user: 'enter mysql user name',
    password: 'enter password',
    database: 'enter datbase name',
    multipleStatements: true,
});

// ***********like***********
// var connection = mysql.createPool({
//     user: 'root',
//     password: 'root@123',
//     database: 'crud',
//     multipleStatements: true,
// });
module.exports.connection = connection;
