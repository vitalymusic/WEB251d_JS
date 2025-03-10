// IF
let x = 2;
// document.write(x<=1);


// if(confirm("Are you sure???")){
//     // Code if true
//     document.write("Allowed!!!")
// }else{
//     // Code if false
//     document.write("Not Allowed!!!")
// }


// If x >0 < 4 = Small
// if x >=4 <7 = middle
// if x>=7 = large

// && and
// || or



if(x > 0 && x<4){
    document.write("Small")
}else if(x >=4 || x<7){
    document.write("middle")
}else{
    document.write("large")
}

let date = new Date;
let month = date.getMonth()+1;
let hours = date.getHours();
document.write(month<10?"0"+month:month);
document.write(hours<10?"0"+hours:hours);


// ? ternate operator
let dayOfWeek = "";
// swith case

switch(x){
    case 1: dayOfWeek = "Monday";break;
    case 2: dayOfWeek = "Tuesday";break;
    case 3: dayOfWeek = "Wednesday";break;
    case 4: dayOfWeek = "Thursday";break;
    default: dayOfWeek = "Other";break;
}


document.write(dayOfWeek);