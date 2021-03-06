// for red, green, and blue color values
var minSlider;
var maxSlider;

var rainbow = [{
  r: 0,
  g: 0,
  b: 0
}, {
  r: 148,
  g: 0,
  b: 211
}, {
  r: 75,
  g: 0,
  b: 130
}, {
  r: 0,
  g: 0,
  b: 255
}, {
  r: 0,
  g: 255,
  b: 0
}, {
  r: 255,
  g: 255,
  b: 0
}, {
  r: 255,
  g: 127,
  b: 0
}, {
  r: 255,
  g: 0,
  b: 0
}];

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      var b = map(y, 0, height, minSlider.value(), maxSlider.value());

      var ca = a;
      var cb = b;
      var n = 0;
      var maxIterations = 100;

      while (n < maxIterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }

      var bright = floor(map(n, 0, maxIterations, 7, 0));
      //bright = map(sqrt(bright), 0, 1, 0, 255);
      //if (n === maxIterations) {
      //  bright = 0;
      //}

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = rainbow[bright].r;
      pixels[pix + 1] = rainbow[bright].g;
      pixels[pix + 2] = rainbow[bright].b;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
