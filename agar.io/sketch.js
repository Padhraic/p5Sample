var blob;
var blobs = [];
var zoom = 1;

function setup() {
  createCanvas(600, 400);
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 200; i++) {
    blobs.push(new Blob(random(-width, width), random(-height, height), 16));
  }

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
  for (var i = blobs.length - 1; i >= 0; i--) {
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    } else {
      blobs[i].show();
    }
  }

}
