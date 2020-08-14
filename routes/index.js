var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Create Room' });
});
// router.get('/showRooms/:userName/:roomName', function(req, res, next) {
//   let {userName,roomName} = req.params;
 
//   res.render('index', { title: 'Rooms List',userName : userName,roomName :roomName});
// });
// router.get('*', function(req, res, next) {
//   let {userName,roomName} = req.params;
 
//   res.render('index', { title: 'Rooms List',userName : userName,roomName :roomName});
// });

module.exports = router;
