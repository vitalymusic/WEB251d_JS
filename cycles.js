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

let obj1 = {
    name:"Jurij",
    age:"56",
    email: "jurij@inbox.lv"
}

for(field in obj1){
    document.write(`${field}:${obj1[field]}<br>`);
}


// 1. Сумма всех чисел он 1 до 100
// 2. Дан текст:

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Посчитать сколько раз встречается буква L 
// разбить текст на параграфы по предложениям 
// Вывести текст в параграфах



