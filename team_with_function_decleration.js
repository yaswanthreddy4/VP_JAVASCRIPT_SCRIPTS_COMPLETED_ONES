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
switch (select) {
  case 1:
    output(0);
    break;
  case 2:
    output(1);
    break;
  case 3:
    output(2);
    break;
  case 4:
    output(3);
    break;

  default:
    alert("Enter Valid Option")

}
   function output(a) {
  console.log(team[a].name);
  console.log(team[a].salary);
  console.log(team[a].sex);
}




console.log(arr);
