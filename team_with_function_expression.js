let team = [{
  name: "ram",
  age: 25,
  sex: "M",
  salary: 1000000,
  country: "india",
}, {
  name: "sam",
  age: 26,
  sex: "M",
  salary: 10000000,
  country: "newzland",
}, {
  name: "kam",
  age: 27,
  sex: "M",
  salary: 10000000,
  country: "pakistan",
}, {
  name: "neeru",
  age: 28,
  sex: "F",
  salary: 1000000000,
  country: "england",
}];
let select = +prompt(`Select any player
1.ram
2.sam
3.kam
4.neeru`);
let flag = function(a) {
console.log(team[a].name);
console.log(team[a].salary);
console.log(team[a].sex);
}
switch (select) {
  case 1:
    flag(0);
    break;
  case 2:
    flag(1);
    break;
  case 3:
    flag(2);
    break;
  case 4:
    flag(3);
    break;

  default:
    alert("Enter Valid Option")

}
