// 1: Find the culprits and nail them — debugging javascript.

// a.Find the culprit
// fix.html

// question?

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// answer : I change the inside of alert() method between double quotes.
// <!DOCTYPE html>
// <html>
// <body>
// <script>
//     alert("I'm JavaScript!");
// </script>
//The answer is first start to double quotes  or single quotes inside the ( ) and same time finish to same quotes
// are the inside ( ). that is the correct way of creating source code.
// </body>
// </html>

// b.Find the culprit and invoke the alert

// fix.html

// question:

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// scripts.js
// alert(“I’m invoked!”);

// answer: I change the source code. double quotes of script.js and inside of alert() method between double quotes. 
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>
// scripts.js
// alert("I'm invoked!");


// c.Explain the below how it works
// explain.html

// question:

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js

// alert("I'm JavaScript!");
// alert('Hello')// this line is not having semicolon
// alert(`Wor 
// ld`)
// alert(3 +
// 1 
// + 2); // this is multiple line code and its working

// answer : 
//<!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// alert("I'm JavaScript!");
// alert('Hello')// Hello is answer .this line is not having semicolon but semicolon usage is finish to end of the line the source code.
// but the semicolon is not importent autometically javaScript put and consider the semicolon and give the ouput.

// alert(`Wor 
// ld`) // Wor Id is answer .this output is consider the inside ( ) words only. it's going to new line but all the word is inside ( ).
//  that's thing is matter to input and this ouput is given for seprated line.

// alert(3 +
// 1 
// + 2); // 6 is the answer .the inside ( ) numbers is integer data type so answer is coming to total number values in single line.


// d.Fix the below to alert Guvi geek
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek";
// admin = fname+' '+lname;
// alert(admin); // "Guvi geek"

// e.Fix the below to alert hello Guvi geek
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek";
// let name = fname+' '+lname;
// alert(`hello ${name}`);

// F.Fix the below to alert sum of two numbers
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// alert(a + b);

//g. If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
// var a = "2" > "12"; // the a variable values are string types so we check the condition answer is true
// output is "Code is Blasted". or if the values of data types is differ to answer is false. then exicute for else statement
// if variable values is wrong output will "Diffused".


// h.How to get the success in console.
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

//script.js
// let a = !parseInt(prompt("Enter a number?"));
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }


// i.How to get the correct score in console.
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let value = parseInt(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// j.Fix the code to welcome the Employee
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//   <script src=”script.js”></script>
// </body>
// </html>

//script.js
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

//script.js
// let login = 'Employee';
// let message = (login == 'Employee');
// console.log(message);

// k.Fix the code to welcome the boss
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// You cant change the value of the msg
// let message;
// if (message == null || message == 2 || message == undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
// console.log(message);

// L. Fix the code to welcome the boss
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let message;
// let lock = message;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// M.Fix the code to welcome the boss
//fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let message;
// let lock = message;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

// N. Change the code to print

// 3

// 2

// 1
// fix.html

// question: 
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log(i--);
// }

// O.Change the code to print 1 to 10 in 4 lines
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let num = 1
// for(i=num;i<=10;i++){
//     console.log(i);
// }

// P. Change the code to print even numbers
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js

// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num);
// }

// Q. Change the code to print all the gifts
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }


// R.Fix the code to disarm the bomb.
// fix.html

// question:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// answer:
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script.js"></script>
// </body>
// </html>

// script.js
// let countdown = 100;
// while (countdown > 0) {
//     countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
//   else{
//     console.log("bomb is disarm")
//   }
// }


// S.Whats the msg printed and why?
// question:
// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

// answer: answer is print will "hi".
// var lemein = "0"; // because this input value is string type.
// var lemeout = 0; // this input value is 0. this boolean value is false.
// var msg = "";
// if (lemein) { // how to conditions works. this work only true values will be consider so given a output is "hi". 
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg);

//----------------------------------------------------------------------------------------------------------------------------

// 2 : Find the culprits and nail them — debugging javascript loops

// a. Write a code to print the numbers in the array
// Output: 1234567891011

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;
 
// for (var i = 1; i < 11; i--) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);

//answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i <= numsArr.length-1; i++) {
//  new_string = new_string + numsArr[i]; 
// }
// console.log(new_string); // ouput is 1234567891011


// b.Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;
 
// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] + , 
// }
// console.log(new_string);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].join(',');
// var new_string = "";
 
// for (var i = 0; i <=numsArr.length-1; i++) {
//  new_string = new_string + numsArr[i]; 
// }
// console.log(new_string); // output is 1,2,3,4,5,6,7,8,9,10,11


// c.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

// var new_string = “”;

// for (var i = 11; i > 0; i — ) {
//  new_string += numsArr[i] + “ “ 
// }
// console.log(new_string);

// answer:
// var new_string = "";

// for (var i = 11; i > 0; i -- ) {
//  new_string = new_string + i + " " 
// }
// console.log(new_string); // output is 11 10 9 8 7 6 5 4 3 2 1


// d. Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var result = "";
// for(i=0; i<=numsArr.length-1; i++){
//     if(numsArr[i] % 2 == 0){
//         result = result + '"even"' + ' ';
//     }else{
//         result = result + numsArr[i] + ' ';
//     }
// }
// console.log(result.trim()); // output is [ 1, "even", 3, "even", 5, "even", 7, "even", 9, "even", … ]


// e.Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var result = "";
// for (var i = 0; i <=numsArr.length-1; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  result = result + '"even"' + numsArr[i] + ' ';
//  }
// }
// console.log(result.trim()); // output is [ "even", 2, "even", 4, "even", 6, "even", 8, "even", 10, … ]


// f.Write a code to add all the numbers in the array
// Output: 66

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for(var i = 0; i <=numsArr.length-1; i++){
//     sum = sum + numsArr[i];
// }
// console.log(sum) // output is 66


// g. Write a code to add the even numbers only
// Output: 30

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=numsArr.length-1; i++) {
//     if(numsArr[i]%2==0){
//         sum = sum + numsArr[i];
//     }        
// }
// console.log(sum); // output is 30


// h. Write a code to add the even numbers and subract the odd numbers
//Output: 94

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// answer:
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=numsArr.length-1; i++) {
//     if(numsArr[i]%2!=0){
//         sum = sum - numsArr[i]
//     }
//     else{
//         sum = sum + numsArr[i]
//  }
// }
// console.log(sum); // output is 94


// i.Write a code to print inner arrays
// Output:
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

// var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); {
//  console.log( numsArr[i])
// }

// answer:
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//     console.log(numsArr[i]); // output is // Array(5) [ 1, 2, 3, 4, 5 ]
//     // Array(6) [ 6, 7, 8, 9, 10, 11 ]
// } 


// j.Write a code to print elements in the inner arrays
// Output: 1234567891011

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// answer:
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all='';
// for (var i = 0; i < numsArr.length; i++) {
//     for(var j = 0 ; j < numsArr[i].length;j++ ){
//         str_all +=numsArr[i][j];
//     }
// }
// console.log(str_all); // output is 1234567891011

// k.Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);

// answer:
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//     for(var j = 0 ; j < numsArr[i].length;j++ ){
//         if(j % 2 == 0 ){
//             numsArr[i][j] = "even";  
//         }
//     }
// }
// console.log(numsArr); // output is [ ["even", 2, "even", 4, "even"], [6, "even", 8, "even", 10, …] ]

// L.Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// answer:
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all='';
// for (var i = 0; i < numsArr.length; i++) {
//     for(var j = 0 ; j < numsArr[i].length;j++ ){
//         str_all +=numsArr[i][j] + ' ';
//         str_all.trim();
//     }
// }

// var input = str_all.split(' ').reverse().join(' ');

// console.log(input) // output is 11 10 9 8 7 6 5 4 3 2 1


// m.Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i]%2!=0)
//  {
//  sum_odd += numsArr[i]
//  }
//  else
//  {
//  sum_even += numsArr[i]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

// answer:
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//     for(var j = 0 ; j < numsArr[i].length;j++ ){
//         if(numsArr[i][j]%2!=0){
//             sum_odd = sum_odd + numsArr[i][j]
//         }else{
//             sum_even = sum_even + numsArr[i][j]
//         }
//     }
// }

// console.log(sum_odd); // output is 36
// console.log(sum_even); // output is 30

//----------------------------------------------------------------------------------------------------------------------------

// 3. Find the culprits and nail them — debugging javascript

// a.Fix the code to get the largest of three.
// Code:

// aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);

// answer:
// aa = (f,s,t) => {
//     console.log(f,s,t);
//     if(f>s && f>t){
//         console.log(f)}
//     else if(s>f && s>t){
//         console.log(s)}
//     else{
//         console.log(t)}
// }
// aa(1,2,3); // the output is 3


// b.Fix the code to Sum of the digits present in the number
//Code:

// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

// answer:
// let n = 123;
// function add(n){
//     let sum = 10;
//     for(var i=0;i<n.length;i++){
//         sum+=n[i]
//     }
//     return sum;
// }
// console.log(add(n));


// c.Fix the code to Sum of all numbers using IIFE function
// Code:

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

// answer:
// const arr = [9,8,5,6,4,3,2,1];
// (function(){
//     let sum = 0;
//         for (var i = 0; i <= arr.length-1; i++){
//             sum = sum + arr[i];
//         }
//         console.log(sum);
//         return sum;
// })(); output is 38


// d.Fix the code to gen Title caps.
//Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();

// answer:
// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(){
//  for (var i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i][0].toUpperCase() + arr[i].substring(1));
//     }
// }
// ano();

// f.Fix the code to return the Prime numbers
// Code:

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);

// answer:
// const newArray=[1,3,2,5,10];

// const myPrime=newArray.filter(num=>{
//     if(num <=1) return false;
//     for(let i=2;i<num;i++){
//         if(num%i==0) {
//             return false;
//         }   
//     }
//         return true;
// });

// console.log(myPrime);


// g.Fix the code to sum the number in that array
// Code:

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);

// answer:
// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) => a + b;
// const sum1 = num.reduce(sum);
// console.log(sum1);

// h.Fix the code to rotate an array by k times and return rotated array using IIFE function
// Code:

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();

// answer:
// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// // k = arr.length % k;
// (function(arr) {
//     var rotateArray = arr;
//     for (var i = 0; i < k; i++) {
//         rotateArray.unshift(arr.pop());
//  }
//     console.log(rotateArray);
// })(arr);

// i.print all odd numbers in an array using IIFE function
// Code:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();

// answer:
// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// })(arr);


// j.Fix the code to reverse.
// Code:

// (function(str){
//  str1 = str.split(“ “).reverse().join(“”);
//  console.log(str1); 
// })(“abcd”)


// answer:
// (function(str){
//     var str1 = str.split("").reverse().join("");
//     console.log(str1); 
// })("abcd")


// k.Fix the code to remove duplicates.
// Code:

// var res = function(arr){
//  for(var i=0; i < arr.length; i++){
//  newArr = [];
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }
// res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

// answer:
// var arr = ["guvi","geek","guvi","duplicate","geeK"];
// var res = function(RemDup){
//     return [...new Set(RemDup)];
// }
// console.log(res(arr));


// L.Fix the code to give the below output:
//Sum of odd numbers in an array
// Code:

// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);

// answer:
// var as=[12,34,5,6,2,56,6,2,1];
// var result = 0;
// var s = as.reduce(function(a,c){
//     if(c % 2!= 0){
//         result = result + c ;
//         return result
//     }
//         return a;
// });
// console.log(s);


// m.Fix the code to give the below output:

// Swap the odd and even digits
// Code:

// aa = data=>{
//  var a=data;
// for(i=0;i<a.length-1;i++){
//  var l=’’;
//  var s=a[i+1]
//  var b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(l);
// }
// aa(“1234”);


// answer:
// const aa = data =>{
//     let l = '';
//     for(i=0; i<data.length;i++){
//         if(i % 2 == 0){
//             l += data[i + 1]; 
//         }else{
//             l += data[i-1]; 
//         }
//     }
//     return l;
// }
// console.log(aa('1234'));


// n . Fix the code to give the below output:
// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:

// var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
 
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
// }

// answer:
// var array = [[["firstname","Vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final = [];
// var i =0;
// while(i<array.length){
//     var obj = {};
//     var j =0;
//     while(j<array[i].length){
//         obj[array[i][j][0]]=array[i][j][1];
//         j++;
//     }
//     final.push(obj);
//     i++;
// }
// console.log(final);