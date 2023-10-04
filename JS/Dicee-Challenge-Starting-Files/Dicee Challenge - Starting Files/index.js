var rn1=Math.floor(Math.random()*6)+1;
var n = "./images/dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src",n)
var rn2=Math.floor(Math.random()*6)+1;
n = "./images/dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src",n)
if (rn1>rn2) {
document.querySelector("h1").textContent="First Wins"    
} else if(rn1<rn2){
    document.querySelector("h1").textContent="Second Wins"
}
else {
    document.querySelector("h1").textContent="Draw!"
}