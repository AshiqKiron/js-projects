var brightnessSlider;
var contrastSlider;
var brightnessValue;
var contrastValue;
var paintButton;
var image;
var canvas;
var context;
var painted;

function init() {

  brightnessSlider = document.getElementById('BrightnessSlider');
  brightnessValue = document.getElementById('BrightnessValue');
  contrastSlider = document.getElementById('ContrastSlider');
  contrastValue = document.getElementById('ContrastValue');
  paintButton = document.getElementById('PaintButton');

  canvas = document.getElementById('Canvas');
  // returns a drawing context on the canvas, or null if the context identifier is not supported
  context = canvas.getContext('2d');
  image = document.getElementById('SourceImage');
  
  // Set the canvas the same width and height of the image
  canvas.width = image.width;
  canvas.height = image.height;
  
  paintButton.addEventListener('click', function () {
    drawImage(image);
    // Or
    // var image = new Image();
    // image.onload = function () {
    //    drawImage(image);
    // }
    // image.src = 'image.jpg';
  });
  
  brightnessSlider.addEventListener('change', function (event) {
    var imageData;
    
    brightnessValue.innerText = event.currentTarget.value;
    
    if (!painted) return;
    
    redrawImage();

    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    applyBrightness(
      imageData.data,
      parseInt(brightnessSlider.value, 10)
    );
    
    context.putImageData(imageData, 0, 0);
  });
  
  contrastSlider.addEventListener('change', function (event) {
    var imageData;
    
    contrastValue.innerText = event.currentTarget.value;
    
    if (!painted) return;
    
    redrawImage();
    
    imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    applyContrast(
      imageData.data,
      parseInt(contrastSlider.value, 10)
    );
    
    context.putImageData(imageData, 0, 0);
  });
  
  paintButton.addEventListener('click', onPaint);
}

function drawImage(image) {
  context.drawImage(image, 0, 0);
}

function redrawImage() {
  drawImage(image);
}

function onPaint(event) {
  painted = true;
  resetImage();

  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var brightness = parseInt(brightnessSlider.value, 10);
  var contrast = parseInt(contrastSlider.value, 10);

  applyBrightness(imageData.data, brightness);
  applyContrast(imageData.data, contrast);
  context.putImageData(imageData, 0, 0);
}

function applyBrightness(data, brightness) {
  for (var i = 0; i < data.length; i+= 4) {
    data[i] += 255 * (brightness / 100);
    data[i+1] += 255 * (brightness / 100);
    data[i+2] += 255 * (brightness / 100);
  }
}

function truncateColor(value) {
  if (value < 0) {
    value = 0;
  } else if (value > 255) {
    value = 255;
  }

  return value;
}

function applyContrast(data, contrast) {
  var factor = (259.0 * (contrast + 255.0)) / (255.0 * (259.0 - contrast));

  for (var i = 0; i < data.length; i+= 4) {
    data[i] = truncateColor(factor * (data[i] - 128.0) + 128.0);
    data[i+1] = truncateColor(factor * (data[i+1] - 128.0) + 128.0);
    data[i+2] = truncateColor(factor * (data[i+2] - 128.0) + 128.0);
  }
}

window.addEventListener('load', init);