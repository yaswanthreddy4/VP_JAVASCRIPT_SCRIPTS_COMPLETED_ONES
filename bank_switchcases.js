

let user = {
  name: "john",
  accno: "123456789",
  balance: 5000,
  branch: "pulivendula",
  minBalance: 1000
};
alert("Welcome To Pulka Bank")
let operation = prompt(`1. Balance
2.Widra
3.Deposite`);
switch (operation) {
  case 'Balance':
  case 'balance':
  case '1':
    alert(`user ${user.name} Having Balance ${user.balance}`);
    break;
  case 'Widra':
  case 'widra':
  case '2':
    let amt = +prompt("Enter Amount");
    if (amt < user.balance && amt < user.minBalance) {
      user.balance -= amt;
      alert(`${user.name}:${user.balance}`);
    }

    break;
  case 'Deposite':
  case 'deposite':
  case '3':
    let amount = +prompt("Enter Amount");
    if (amount < 10000) {
      user.balance += amount
      alert(`${user.name}:${user.balance}`)
    } else {
      alert('You Exceeded Max Limit Value. Plz Try 2mrw')
    }
    break;
  default:
    alert("Invalid Option");

}
