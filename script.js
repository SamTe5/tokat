let bg=document.getElementById("bg")
let moon=document.getElementById("moon")
let mountain=document.getElementById("mountain")
let road=document.getElementById("road")
let text=document.getElementById("text")
var loader=document.getElementById("loader")
var yazi=document.getElementById("tarihYazi")
var yazi2=document.getElementById("tarihYazi2")

window.addEventListener("load",function(){
    loader.style.display="none"
})
function showDiv(sayi){
    if(sayi==1){
        yazi.style.display="block"
    }else if(sayi==2){
        yazi2.style.display="block"
    }
    
}
function hideDiv(sayi){
    if(sayi==1){
        yazi.style.display="none"
    }else if(sayi==2){
        yazi2.style.display="none"
    }
    
}
window.addEventListener("scroll", function(){
    var value=this.window.scrollY;
    bg.style.top=value * 0.5 + "px";
    moon.style.left=-value*0.5+"px";
    mountain.style.top=-value*0.15+"px";
    road.style.top=value*0.15+"px";
    text.style.top=value*1+"px";
})

function dinamikBoyutlandir() {
    var metinElementi = document.getElementById('text');
    var pencereGenislik = window.innerWidth;

    // Örneğin, pencere genişliğine bağlı olarak metin boyutunu ayarlamak
    var yeniBoyut = pencereGenislik / 10; // Kendi hesaplamanıza göre ayarlayabilirsiniz

    metinElementi.style.fontSize = yeniBoyut + 'px';
}

  // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde fonksiyonu çağır
  window.onload = dinamikBoyutlandir;
  window.onresize = dinamikBoyutlandir;