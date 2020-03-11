var db = require('../config/database');
const logger = require('winston');
var rtrim = require( 'rtrim' );

let order_module = {
getOrderList:getOrderList,
validateUser:validateUser,
createOrder:createOrder,
updateOrder:updateOrder,
}

function getOrderList(callback) 
{ 
	let getOrderData = "select *,name from orderlist inner join user_info ui on ui.id=orderlist.orderby"; 
    db.query(getOrderData, function(err, rows, fields) { 
                callback(err, rows);
    });
}

function validateUser(userData,callback)
{
	let checkUser="SELECT * FROM user_info where name='"+userData.userName+"' AND password='"+userData.password+"' ";
	  
	  db.query(checkUser, function(err, rows, fields) { 
                callback(err, rows);
    });
}

function createOrder(data,callback)
{
	let d = new Date();
	let month = d.getMonth() + 1;
	let date = d.getFullYear() + "-" + month + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	let insertSql="INSERT INTO 	orderlist (ordername,orderQuantity,orderby,orderon)values('"+data.ordername+"','"+data.orderQuantity+"','"+data.userid+"','"+date+"')";
	
	db.query(insertSql, function(err, rows, fields) { 
                callback(err, rows);
    });
	
};

function updateOrder(data,callback){
	let d = new Date();
	let month = d.getMonth() + 1;
	let date = d.getFullYear() + "-" + month + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	
	let updateSql="UPDATE orderlist SET ordername='"+data.ordername+"',orderQuantity='"+data.orderQuantity+"',orderby='"+data.userid+"',orderon='"+date+"' where orderid='"+data.orderid+"'";
	
	db.query(updateSql, function(err, rows, fields) { 
                callback(err, rows);
    });
}

module.exports = order_module;