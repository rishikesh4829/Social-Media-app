const express = require('express');
const cors = require('cors');
const app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    user:'phpmyadmin',
    password:'rishi123',
    database: 'phpmyadmin'

});
const router = express.Router();
router.get('/users', function(req, res){
  con.query(' select * from friend ', function (error, results, fields){
    if(error) throw error;
    res.send(JSON.stringify(results));

  });
});

router.get('/friend', function(req, res){
  con.query(' select * from friend where user_id IN (select friend_id from friend_f where id =1)', function (error, results, fields){
    if(error) throw error;
    res.send(JSON.stringify(results));

  });
});

router.get('/friend_f', function(req, res){
  con.query('SELECT * FROM friend where user_id IN(select friend_id from friend_f where id IN (select friend_id from friend_f where id =1))', function (error, results, fields){
    if(error) throw error;
    res.send(JSON.stringify(results));

  });
});
//mounting 
app.use('/api', router);

app.listen(4000, () => console.log('Server is up and running...'));