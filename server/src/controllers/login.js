const client = require('../db/connection.js');

// login user
const loginUser = async (req, res) => {
    console.log(req.body);
    res.send(req.body);
};

module.exports = { loginUser }