let login = [{
  loginuse : "admin",
  loginpasswd: "admin",
}];
let username = prompt("Enter user name");
let password = prompt ("enter passwd");
for(let index=0; index<=3; index++){
if (username == login[index].loginuse  && password == login[index].loginpasswd){
  alert("login sucessful");

let user = {
  name: "john",
  accno: "123456789",
  balance: 5000,
  branch: "pulivendula",
  minBalance: 1000,
  balAmt : function balanceAmt() {
    alert(`user ${this.name} Having Balance ${this.balance}`);
  },
  widAmt : function widraAmt() {
    let amt = +prompt("Enter Amount");
    if (amt < this.balance && amt > this.minBalance) {
      this.balance -= amt;
      alert(`${this.name}:${this.balance}`);
    } else {
      alert("You Had Entered Exceed Amount. Please Try Again")
    }},
    depAmt : function depositeAmt() {
      let amount = +prompt("Enter Amount");
      if (amount < 10000) {
        this.balance += amount
        alert(`${this.name}:${this.balance}`)
      } else {
        alert('You Exceeded Max Limit Value. Plz Try 2mrw')
      }
    }


};
alert("Welcome To Pulka Bank")
let operation = prompt(`1. Balance
2.Widra
3.Deposite`);

// function balanceAmt() {
//   alert(`user ${user.name} Having Balance ${user.balance}`);
// }

// function widraAmt() {
//   let amt = +prompt("Enter Amount");
//   if (amt < user.balance && amt > user.minBalance) {
//     user.balance -= amt;
//     alert(`${user.name}:${user.balance}`);
//   } else {
//     alert("You Had Entered Exceed Amount. Please Try Again")
//   }
// }

// function depositeAmt() {
//   let amount = +prompt("Enter Amount");
//   if (amount < 10000) {
//     user.balance += amount
//     alert(`${user.name}:${user.balance}`)
//   } else {
//     alert('You Exceeded Max Limit Value. Plz Try 2mrw')
//   }
// }
switch (operation) {
  case 'Balance':
  case 'balance':
  case '1':
    user.balAmt();
    break;
  case 'Widra':
  case 'widra':
  case '2':
    user.widAmt();
    break;
  case 'Deposite':
  case 'deposite':
  case '3':
    user.depAmt();
    break;
  default:
    alert("Invalid Option");
    break;
}
}
else{
  alert ("invalid user");
  break;
}
break;
}
