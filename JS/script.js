let diff = 0;
const txt = ["I'M Keri Deo", "I'M A WEB DESIGNER"];
const speed = 50;
let interv;

function typeWriter() {
  const dis = document.getElementById("introText");
  if (diff < txt[0].length) {
    dis.innerHTML += txt[0].charAt(diff);
    diff++;
  } else if (dis.innerHTML.length > 0) {
    dis.innerHTML = dis.innerHTML.slice(0, -1);
  } else {
    clearInterval(interv);
    txt.push(txt.shift());
    diff = 0;
    setTimeout(startTyping, 1000);
  }
}

function startTyping() {
  interv = setInterval(typeWriter, 100);
}

startTyping();











window.onscroll = function() {hideNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function hideNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}