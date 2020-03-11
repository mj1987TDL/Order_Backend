const mysql = require('mysql');
const os = require('os');
var hostname = os.hostname();

if(hostname!="rlpv10000")
{
	hostname="rlpv10002";
}else
{
	hostname=hostname;
}

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'order',
	timezone: 'utc',
    multipleStatements:true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Success');
    else {
        logger.error(err.message);
        return console.error('error: ' + err.message);

    }
});

module.exports = mysqlConnection;
