var app = require('express')();
var blobs = [];
var http = require('http').Server(app);
var io = require('socket.io')(http);

setInterval(heartbeat, 33);

function heartbeat() {
  io.sockets.emit('heartbeat', blobs);
}

function Blob(id, x, y, r) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = r;
}

app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('start', function(data) {
    console.log('start x:' + data.x + ' y:' + data.y + ' r:' + data.r);
    blobs.push(new Blob(socket.id, data.x, data.y, data.r));
  });
  socket.on('update', function(data) {
    //    console.log('socket: ' + socket.id + ' update x:' + data.x + ' y:' + data.y + ' r:' + data.r);
    for (var i = 0; i < blobs.length; i++) {
      if (blobs[i].id === socket.id) {
        blobs[i].x = data.x;
        blobs[i].y = data.y;
        blobs[i].r = data.r;
        break;
      }
    }
  });
});

http.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
