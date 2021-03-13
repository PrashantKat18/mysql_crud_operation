const express = require('express');
const router = express();
const database = require('../db_connection/database')

// get use details
router.get('/getUser', (req, res) => {
    try {
        var searchQuery = `select * from user`;
        database.connection.getConnection((err, connection) => {
            if (err) {
                console.error("", err);
                if (connection) {
                    connection.release();
                    connection.destroy();
                }
                return res.status(500).json({
                    status: false,
                    message: "Please try again"
                });
            }
            connection.query(searchQuery, (error, rows, fields) => {
                if (error) {
                    console.error("", error);
                    if (connection) {
                        connection.release();
                        connection.destroy();
                    }
                    return res.status(500).json({
                        status: false,
                        message: "Please try again"
                    });
                }
                const result = {
                    status: true,
                    message: "user List",
                    data: rows
                }
                if (connection) {
                    connection.release();
                    connection.destroy();
                }
                return res.status(200).json(result);

            });
        });
    } catch (e) {
        console.log(e.message)
        return res.status(500).json({
            status: false,
            message: e.message
        });
    }
});

// add user details
router.post('/addUser', (req, res) => {
    try {
        var userId = req.body.userId;
        var userName = req.body.userName;
        var userEmail = req.body.userEmail;
        var userNumber = req.body.userNumber;
        var userAddress = req.body.userAddress;
        database.connection.getConnection((err, connection) => {
            if (err) {
                if (connection) {
                    connection.release();
                    connection.destroy();
                } return res.status(500).json({
                    status: false,
                    message: err.message
                })
            }
            query = `insert into user values ('${userId}','${userName}','${userEmail}','${userNumber}','${userAddress}')`;
            connection.query(query, (error, rows, fields) => {
                console.log(query);
                if (error) {
                    if (connection) {
                        connection.release();
                        connection.destroy();
                    }
                    return res.status(500).json({
                        status: false,
                        message: error.message
                    })
                }
                const result = {
                    status: true,
                    message: "user added Successfully !"
                }
                if (connection) {
                    connection.release();
                    connection.destroy();
                }
                return res.status(200).json(result);
            });
        })
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: e.message
        });
    }
});

// update user
router.post('/updateUser', (req, res) => {
    try {
        var userId = req.body.userId;
        var userName = req.body.userName;
        var userEmail = req.body.userEmail;
        var userNumber = req.body.userNumber;
        var userAddress = req.body.userAddress;
        database.connection.getConnection((err, connection) => {
            if (err) {
                if (connection) {
                    connection.release();
                    connection.destroy();
                } return res.status(500).json({
                    status: false,
                    message: err.message
                })
            }
            query = `update user set userName = '${userName}', userEmail = '${userEmail}', userNumber = '${userNumber}', userAddress = '${userAddress}' where userId= '${userId}' `;
            connection.query(query, (error, rows, fields) => {
                console.log(query);
                if (error) {
                    if (connection) {
                        connection.release();
                        connection.destroy();
                    }
                    return res.status(500).json({
                        status: false,
                        message: error.message
                    })
                }
                const result = {
                    status: true,
                    message: "Updated Successfully !"
                }
                if (connection) {
                    connection.release();
                    connection.destroy();
                }
                return res.status(200).json(result);
            });
        })
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: e.message
        });
    }
});

// delete user
router.post('/deleteUser', (req, res) => {
    try {
        var userId = req.body.userId;
        database.connection.getConnection((err, connection) => {
            if (err) {
                if (connection) {
                    connection.release();
                    connection.destroy();
                } return res.status(500).json({
                    status: false,
                    message: err.message
                })
            }

            query = `delete from  user  where userId= '${userId}' `;
            connection.query(query, (error) => {
                console.log(query);
                if (error) {
                    if (connection) {
                        connection.release();
                        connection.destroy();
                    }
                    return res.status(500).json({
                        status: false,
                        message: error.message
                    })
                }
                const result = {
                    status: true,
                    message: "Deleted Successfully !"
                }
                if (connection) {
                    connection.release();
                    connection.destroy();
                }
                return res.status(200).json(result);
            });
        })
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: e.message
        });
    }
});


module.exports = router;