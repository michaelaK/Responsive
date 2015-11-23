// Dieser Listener reagiert darauf, dass Cordova startklar ist:
document.addEventListener("deviceready", meineStartfunktion, false);
document.addEventListener("orientationchange", andererBildschirm, false);

function meineStartfunktion() {
  document.getElementById("ausgabe").innerHTML = "Cordova App gestartet.";
}

function andererBildschirm() {
  document.getElementById("ausgabe").innerHTML = "window.orientation:"+window.orientation;
}
