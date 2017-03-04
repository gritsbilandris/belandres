var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'parallax-template')));
app.use(('/css'),express.static(path.join(__dirname, 'parallax-template/css')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'parallax-template/gretch.html'));
});
app.get('/gallery', function(req, res){
  res.sendFile(path.join(__dirname, 'parallax-template/gallery.html'));
});
app.get('/template', function(req, res){
  res.sendFile(path.join(__dirname, 'parallax-template/template.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});