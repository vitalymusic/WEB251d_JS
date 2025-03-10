// 1. Сумма всех чисел он 1 до 100


let answer = 0;

for(let i=1;i<=100;i++){
    answer+=i;
}

document.write(answer);
let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


// Посчитать сколько раз встречается буква L 

let lcount = [...text.matchAll(/l/gi)];

document.write(lcount.length);

// разбить текст на параграфы по предложениям 


function splitTextByparagraphs(text){
    return text.split(". ");
}


function printText(arr){
    for(sentence of arr){
        document.write(`<p>${sentence}</p>`)
    }
}


// console.log(splitTextByparagraphs(text));

printText(splitTextByparagraphs(text));


// пользователь вводит 5 адресов картинок
// данные сохраняются в массив
// С помощью MAP все элементы выводятся на страницу

// let images = [];

// for(let j = 1;j<=5;j++){
//     images.push(prompt("введите адрес картинки "+ j))
// }

// console.log(images);

// images.map((item)=>{
//     document.write(`<img src="${item}" width="200">`);
// })


// Дан массив с товарами

// Нужно подсчитать сумму за все товары
let total = 0;



let cart = [
    {
        product:"HDD",
        price:30.50,
        quantity:15
    },
    {
        product:"SSD",
        price:75.00,
        quantity:20    
    },
    {
        product:"Video Card",
        price:450.50,
        quantity:12
    }
];


cart.forEach((item,i)=>{
    let sum = item.price*item.quantity;
    total+=sum;
    document.write(`
     <p>${i+1}.${item.product} - ${sum}</p>       
    `);
})

document.write(`Сумма за все товары: ${total.toFixed(2)} &euro;`);
