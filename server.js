//memanggil app.js di folder controller dan mendeklasrsikan app
var app = require('./controller/app.js');

//deklarasi server
var server = app.listen(8081, function(){
    //deklarasi port
    var port = server.address().port;
    //debug
    console.log('web app hosted at http://localhost: %s', port);
});