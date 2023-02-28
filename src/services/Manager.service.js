const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'EM_Pulse'
  });
  

function getManagers () {
    var result 
    connection.query('SELECT * FROM managers', (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        result = results
        return(results);
      });
      return result;

}

module.exports = {getManagers}