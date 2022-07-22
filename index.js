function draw(x, y, color)
  {
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d'); 
        var X = x;
        var Y = y;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.fillStyle = color; 
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
function printMousePos(event) {
    console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
    fadeout();
    clearinfoShow();
    draw(event.clientX, event.clientY, '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
}
document.addEventListener('DOMContentLoaded', function(event) {
    var canvas = document.getElementById('circle');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    document.addEventListener("click", printMousePos);
});
document.addEventListener('contextmenu', function(ev) {
    var canvas = document.getElementById('circle');
    ev.preventDefault();
    console.log('success!');
    document.getElementById('fadeout').style.opacity = '50%';
    document.getElementById('clear').style.opacity = '0';
    document.getElementById('clear2').style.opacity = '0';
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return false;
}, false);
document.addEventListener('keypress', (event) => {
  var code = event.code;
  if(code == "Space") {
    saveCanvas();
  }
}, false);
function saveCanvas() {
  let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'InklrImage.png');
  var canvas = document.getElementById("circle");
	canvas.toBlob(function(blob) {
	  let url = URL.createObjectURL(blob);
	  downloadLink.setAttribute('href', url);
	  downloadLink.click();
	});
}
function fadeout() {
  document.getElementById('fadeout').style.opacity = '0';
}
function clearinfoShow() {
  document.getElementById('clear').style.opacity = '50%';
  document.getElementById('clear2').style.opacity = '50%';
}