let basket = new Array();
for (index=0; index<100; index++){
let input = +prompt(`
1.Apple
2.Mango
3.Bananna
4.Pineapple`);

switch(input){
case 1 :
let quantity = +prompt("Enter Your Quantity");
basket.push(quantity)
console.log("Apple :", basket);
break;

case 2 :
let quantit = +prompt("Enter Your Quantity");
basket.push(quantit)
console.log("Mango :", basket);
break;

case 3 :
let quanti = +prompt("Enter Your Quantity");
basket.push(quanti)
console.log("Bananna :", basket);
break;

case 4 :
let quant = +prompt("Enter Your Quantity");
basket.push(quant)
console.log("Pineapple :", basket);
break;
default:
alert("error");
break;
}

}
