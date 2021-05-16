
var inc = 0.005;
var zoff=0
const numFish = 100; // I call the dots fish
var fishPositions = [];
var bg = true


function setup() {
    createCanvas(600,600);
    pixelDensity(1);
    noise = new OpenSimplexNoise(Date.now());

    for (i_fish=0; i_fish<numFish; i_fish++) {
      fishPositions.push([floor(i_fish/10)*width/10+25, (i_fish%10)*height/10+25])
    }
}

function draw() {

  background(128);
  noStroke()

  var yoff = 0
  loadPixels();

  for (var y=0; y<width; y++) {
    var xoff = 0;
    for (var x=0; x<height; x++)
    {
      var index = (x+y*width)*4;
      var r = noise.noise3D(xoff, yoff, zoff)*255;
      pixels[index] = r;
      pixels [index+1]= r;
      pixels[index+2] = r;
      pixels[index+3] = 255;

      xoff+=inc;
    }
    yoff +=inc;
  }
  zoff +=inc;
  if (!keyIsDown(32)) {
      updatePixels();
  }
  for (i=0; i<numFish; i++) {
     fish_x = fishPositions[i][0];
     fish_y = fishPositions[i][1];
     fill(pixels[(round(fish_x)+round(fish_y)*width)*4]);
      ellipse(fishPositions[i][0],fishPositions[i][1],20)
    }
    zoff +=inc;
}
