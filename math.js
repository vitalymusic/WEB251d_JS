  // script goes here
  console.log("Hello world");
  document.writeln("Hello World");

  //  const name = prompt("What is your name???");

   //name="";
  //  document.writeln(name);



  // camelCase
  // text.upperCase();

  // Data types


  let num1 = 25 //int
  let num2 = 3.56 //double, float
  let text = "Alex" //String
  let htmlText = "<h1>This is Heading</h1>" //String
  let bool = true; //false
  // confirm() 

  let arr1 = ["user1",num1,bool,["red","green"]];
  let house = {
      rooms:5,
      floors:2,
      price:150000,
      color:"white",
      isEmpty:false
  };


  document.writeln(num1,"<br>",num2);  
  document.writeln("<br>",htmlText);  
  document.writeln("<br>",bool);  
  document.writeln("<br>",arr1[0]);  
  document.writeln("<br>",house.price);  


  // +=*/
  let result = [];
  let number1 = +prompt("Enter number 1");
  let number2 = +prompt("Enter number 2");
  // let result = Number(number1)+Number(number2);
  result[0] = number1+number2;
  result[1] = number1-number2;
  result[2] = number1*number2;
  result[3] = number1/number2;
  result[4] = number1**number2;

  document.writeln("<br>",result[0]);
  document.writeln("<br>",result[1]);
  document.writeln("<br>",result[2]);
  document.writeln("<br>",result[3]);
  document.writeln("<br>",result[4]);


  // Math

  document.writeln("<br>",Math.ceil(4.32));
  document.writeln("<br>",Math.round(4.32));
  document.writeln("<br>",Math.floor(4.32));


  // Math.trunc()

  // Math.random()
  document.writeln("<br>",Math.trunc(Math.random()*10));

  let sum = 3.7654;
  document.writeln("<br>",sum.toFixed(2));


  // 1. Rasstojanie
  // 2. Rashod topliva
  // 3. Vo skoljko obojdetsja doroga tuda i obratno
  
  document.writeln("Поездка обойдется в: ",result);