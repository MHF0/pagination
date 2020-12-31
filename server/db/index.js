const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pagination',
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


gitEmployees = (page, size) => {
    return new Promise((resolve, reject) => {
        let offset;
        if (page > 1) {
            offset = (page - 1) * size
        }
        else {
            offset = 0
        }

        const query = `SELECT * FROM pagination.employee LIMIT ? OFFSET ?`
        const data = [size, offset]
        connection.query(query, data, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = { gitEmployees };