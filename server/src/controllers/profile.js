const client = require('../db/connection.js');

// get user details
const getUser = async (req, res) => {
    const id = 2;
    const query = `SELECT * FROM users WHERE id = ${id}`;
    try{
        const response = await client.query(query);
        // console.log(response);
        
        if(response.rowCount == 0)
        {
            res.status(401).send("Kindly Login!");
        }
        else if(response.rowCount == 1)
        {
            res.status(200).send(response.rows[0]);
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(403).send('Some error occured');
    }

};

module.exports = {
    getUser
}