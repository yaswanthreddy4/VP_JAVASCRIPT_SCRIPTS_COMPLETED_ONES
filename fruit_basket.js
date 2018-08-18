let cart = [];
let mango = {fruit:"mango",price:10};
let grape = {fruit:"grape",price:15};
let straberry = {fruit:"straberry",price:20};
for (loop=0; loop<100; loop++){
let select = +prompt(`Enter Your Fruit
1.mango
2.grape
3.straberry`)
if (select == 1){
  let quantity = +prompt("Enter Quantity you want");
  mango.quantity = quantity;
  mango.totalprice = (mango.price)*quantity;
  cart.push(mango);
}else if (select == 2){
  let quantity = +prompt("Enter Quantity you want");
  grape.quantity = quantity;
  grape.totalprice = (grape.price)*quantity;
  cart.push(grape);
}else if (select == 3){
  let quantity = +prompt("Enter Quantity you want");
  straberry.quantity = quantity;
  straberry.totalprice = (straberry.price)*quantity
  cart.push(straberry);
}else{
  alert("invalid selection");
  break;
}
}
console.log(cart);
console.log("Total Price : ", mango.totalprice+grape.totalprice+straberry.totalprice);
