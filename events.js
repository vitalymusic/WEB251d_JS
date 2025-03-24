// events
document.addEventListener("DOMContentLoaded",(e)=>{
console.log(e);    
document.body.style.background="grey";

document.querySelector("input[name=\"name\"]").addEventListener("input",(e)=>{
    document.querySelector("h1").innerText = e.target.value;
})



function radomColor(){
    red = Math.trunc(Math.random()*255);
    green = Math.trunc(Math.random()*255);
    blue = Math.trunc(Math.random()*255);


    return `rgb(${red},${green},${blue})`;
}

document.addEventListener("keyup",(event)=>{
    // console.log(event);
    
    if(event.code=="Space"){
        document.body.style.background = radomColor();
       
    }
})







})
