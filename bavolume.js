// Мониторинг объёма крипты:

var audio = new Audio("/static/beep.wav");
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(audio);

// create a gain node
var gainNode = audioCtx.createGain();
gainNode.gain.value = 10; // double the volume
source.connect(gainNode);

// connect the gain node to an output destination
gainNode.connect(audioCtx.destination);


var dangerCount = $('.is-danger').length;
setInterval(function () {
  var newCount = $('.is-danger').length;
  if (newCount > dangerCount) {
    audio.play();
    dangerCount = newCount;
  }
}, 1000);
