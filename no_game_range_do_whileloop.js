"use strict"
// while(true){
//   console.log("I`m Always Executable");
// }
// let count = 0;
// while (count<5) {
//   console.log("count value:",count);
//   let result = count++
//   console.log(result);
// }
let chance =1;
let lose = 0;
let win = 0;
do{
  alert("This is a no game range 1-20")
  let value = prompt("enter no between 1-20");
  let flag=   (value ==9)? "win":
              (value ==5)? "win":
              (value ==2)? "win":
              (value ==13)? "win":
              (value ==20)? "win":
              "lose";
  if(flag=="win"){
    alert("you win");
    win++;
    alert ("win count:" +win);
  }
  else{
    alert("better luck nect time");
    lose++;
    alert("losecount:" +lose);
  }
  alert("chances overed:" +chance)
  chance++
}
while(chance<=3);




// let num = 2;
// while (num <=100){
//   num +=2  //even numbers
//   console.log(num);
// }


// let num = 2;
// while (num <=100){
//   num +=3  //odd numbers
//   console.log(num);
// }

// let num = 2;
// while (num <=100){
//   num *=2   //2*output
//   console.log(num);
// }

// let num = 2;
// while (num <=100){
//   num **=2  // 2power of output
//   console.log(num);
// }


//
// var i = 1;
// // this while loop prints odd numbers between 1 and 10.
// while (i <= 10) {
// console.log(i);
// i += 2;
// }
