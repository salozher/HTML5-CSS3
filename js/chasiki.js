/*! Chasiki | Sergiy Melchakov 2018 | WEB design NOVI School */

function timepadding(x5) {
  if (typeof x5 !== "string") {
    x5 = x5.toString()
  }
  var x6 = 0;
  var x7 = 0;
  if (x5 % 60 === 0) {
    return x5 + ":00"
  }
  else {
    x6 = x5 % 60;
    return x6.toString()
  }
}
function gettimezone() {
  var d = new Date();
  var z = document.getElementById("result");
  var utcsinceepoch = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
  var y1 = d.getTime()
  z.innerHTML= (utcsinceepoch - d.getTime())/3600000;
}
gettimezone();
function utcoffset(time, offset) {
  return time + offset;
}
function displayTime() {
  var d = new Date();
  var y = document.getElementById("a");
  var h = (d.getHours()).toString();
  var m = (d.getMinutes()).toString();
  var s = (d.getSeconds()).toString();
  var h2 = ("0" + h).slice(-2);
  var m2 = ("0" + m).slice(-2);
  var s2 = ("0" + s).slice(-2);
  y.style.fontSize = "60px";
  y.style.fontFamily = "Times New Roman, Times, serif";
  y.innerHTML= h2 + ":" + m2 + ":" + s2;
}
setInterval(displayTime, 1000);