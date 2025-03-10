function sum(a,b){
    let answer = a+b;
    return answer
}

function printRestult(result){
    document.write(`<h1>сумма чисел: ${result}</h1>`)
}


printRestult(sum(123,123));


printRestult(sum(345,456));
printRestult(sum(12,12));
printRestult(sum(456,765));
printRestult(sum(678,987));


document.body.onload = function(){
    // alert();
}

document.body.onclick = (a,b)=>{
    document.body.style.background = "red";
}





