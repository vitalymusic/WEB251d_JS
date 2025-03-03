// let i = 0;
// while(i<=50){
//         
// }


// do{
//     document.write("<div>"+i+"</div>");
//     i++;
// }
// while(i<=50);


// for(let j=0;j<=20;j++){
//     document.write("<div>"+j+"</div>");
// }

let months = "January | February | March | April | May | June | July | August | September | October | November | December";

let monthsArr = months.split(" | ");
let out ="<select>";

for(item of monthsArr){
    out+=`<option value="${item}">${item}</option>`;
}

out+="</select>";

document.write(out);

let table = "<table border=\"1\" width=\"100%\">";
for(let row = 1; row<=10;row++){
    table += "<tr>";
        for(let col = 1;col<=10;col++){
            table+=`<td>${row*col}</td>`;
        }
    table +="</tr>";
}
table+="</table>";

document.write(table);

