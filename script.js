let bg = document.getElementById("bg")
let moon = document.getElementById("moon")
let mountain = document.getElementById("mountain")
let road = document.getElementById("road")
let text = document.getElementById("text")
var loader = document.getElementById("loader")
var yazi = document.getElementById("tarihYazi")
var yazi2 = document.getElementById("tarihYazi2")
var yazi3 = document.getElementById("tarihYazi3")
var yazi4 = document.getElementById("tarihYazi4")
var yazi5 = document.getElementById("tarihYazi5")
var yazi6 = document.getElementById("tarihYazi6")
var yazi7 = document.getElementById("tarihYazi7")
var yazi8 = document.getElementById("tarihYazi8")
var yazi9 = document.getElementById("tarihYazi9")
var yazi10 = document.getElementById("tarihYazi10")

window.addEventListener("load", function () {
    loader.style.display = "none"
})
function showDiv(sayi) {
    if (sayi == 1) {
        yazi.style.display = "block"
    } else if (sayi == 2) {
        yazi2.style.display = "block"
    } else if (sayi == 3) {
        yazi3.style.display = "block"
    } else if (sayi == 4) {
        yazi4.style.display = "block"
    } else if (sayi == 5) {
        yazi5.style.display = "block"
    } else if (sayi == 6) {
        yazi6.style.display = "block"
    } else if (sayi == 7) {
        yazi7.style.display = "block"
    } else if (sayi == 8) {
        yazi8.style.display = "block"
    } else if (sayi == 9) {
        yazi9.style.display = "block"
    } else if (sayi == 10) {
        yazi10.style.display = "block"
    }

}
function hideDiv(sayi) {
    if (sayi == 1) {
        yazi.style.display = "none"
    } else if (sayi == 2) {
        yazi2.style.display = "none"
    } else if (sayi == 3) {
        yazi3.style.display = "none"
    } else if (sayi == 4) {
        yazi4.style.display = "none"
    } else if (sayi == 5) {
        yazi5.style.display = "none"
    } else if (sayi == 6) {
        yazi6.style.display = "none"
    } else if (sayi == 7) {
        yazi7.style.display = "none"
    } else if (sayi == 8) {
        yazi8.style.display = "none"
    } else if (sayi == 9) {
        yazi9.style.display = "none"
    } else if (sayi == 10) {
        yazi10.style.display = "none"
    }

}
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    // Apply the scroll event listener only on index.html
    window.addEventListener("scroll", function () {
        var value = this.window.scrollY;
        bg.style.top = value * 0.5 + "px";
        moon.style.left = -value * 0.5 + "px";
        mountain.style.top = -value * 0.15 + "px";
        road.style.top = value * 0.15 + "px";
        text.style.top = value * 1 + "px";
    });

    // Function to dynamically adjust text size based on window width
    function dinamikBoyutlandir() {
        var metinElementi = document.getElementById('text');
        var pencereGenislik = window.innerWidth;

        // For example, adjust text size based on window width
        var yeniBoyut = pencereGenislik / 10; // You can adjust this calculation according to your needs

        metinElementi.style.fontSize = yeniBoyut + 'px';
    }

    // Call the function when the page loads and when the window is resized
    window.onload = dinamikBoyutlandir;
    window.onresize = dinamikBoyutlandir;
}