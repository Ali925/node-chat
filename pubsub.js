var faye = require('faye'),
    express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app);


var bayeux = new faye.NodeAdapter({mount: '/faye'});

bayeux.attach(server);
server.listen(8080);

app.use("/static", express.static(__dirname + "/static"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/static/chat.html");
});