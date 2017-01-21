var socket;

var blob;
var blobs = [];
var zoom = 1;

function setup() {
  createCanvas(600, 400);
  //start a socket connection to the server
  socket = io.connect('http://localhost:3000');

  socket.on('heartbeat', function(data) {
    console.log(data);
    blobs = data;
  });

  blob = new Blob(0, 0, 64);
  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r
  };
  socket.emit('start', data);
}

function draw() {
  background(0);
  blob.update();
  translate(width / 2, height / 2);
  var newZoom = 64 / blob.r;
  zoom = lerp(zoom, newZoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  blob.show();
  blob.constrain();

  for (var i = 0; i < blobs.length; i++) {
    if (blobs[i].id !== socket.id) {
      fill(0, 0, 255);
      ellipse(blobs[i].x, blobs[i].y, blobs[i].r * 2, blobs[i].r * 2);
      fill(255);
      textSize(6);
      textAlign(CENTER);
      text(blobs[i].id, blobs[i].x, blobs[i].y + blobs[i].r);
    }
  }

  var data = {
    x: blob.pos.x,
    y: blob.pos.y,
    r: blob.r
  };
  socket.emit('update', data);
}
