var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'sql12.freemysqlhosting.net',
 user:'sql12253122',
 password:'wvnQSVq2xH',
 database:'sql12253122'
 
});
 module.exports=connection;