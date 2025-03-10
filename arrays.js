let arr1 = [];

arr1.push("Hello");
arr1.push({
    username:"alex",
    age:"41"
});
arr1.push(56);


arr1.pop();

arr1.shift(); //removes first element
arr1.unshift(["one","two","three"]); //adds first element




console.log(arr1);


let months = "January | February | March | April | May | June | July | August | September | October | November | December";
let monthsArr = months.split(" | ");
monthsArr.sort();

let numbers = [1,15,12,3,6,8,9,4,2,22]

numbers.sort(function(a,b){
    return a-b;
});


document.write("<ul>");
monthsArr.map(function(item,i,arr){
    return document.write(`<li>${i+1}. ${item}</li>`);
})
document.write("</ul>");


let newArr = numbers.filter(function(item){
    if(item<=7){
        return item;
    }
});

let newArr2 = monthsArr.findIndex((item)=>{
    if(item=="January"){
        return item;
    };
})

// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);



monthsArr.splice(9,3);
monthsArr.length;
console.log(monthsArr[3]);







console.dir(document.body);
console.log(numbers);
console.log(newArr);
console.log(newArr2);


