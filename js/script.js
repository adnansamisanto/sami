var p = document.getElementById("tex_t");
p.innerHTML = "";
var n = 0;
var str =
  "Hello! I’m Adnan Sami. Web designer from BD, Ctg,Khgrachari. I have experience in web site design and building, also I am good at Website Design. I love to talk with you about our unique.";
var typeTimer = setInterval(function () {
  n = n + 1;
  p.innerHTML = " " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = "" + str;
    n = 0;
    setInterval(function () {
      if (n === 0) {
        p.innerHTML = " " + str + "|";
        n = 1;
      } else {
        p.innerHTML = " " + str;
        n = 0;
      }
    }, 500);
  }
}, 60);
