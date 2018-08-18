let user = [{
  name : "admin",
  passwd: "admin",
},
{
  name : "admin2",
  passwd: "admin2",
}]
for(index=0;index<3  ;index++){
let username = prompt("Enter user name");
let password = prompt ("enter passwd");
// for(index=0;index<=user.length  ;index++){
if (username == user[index].name  && password == user[index].passwd){
  alert("login sucessful");
}
else{
  for(index=0;index<=user.length  ;index++){
  if (username == user[index+1].name  && password == user[index+1].passwd){
    alert("login sucessful");
    break;}
else{
alert("inavlid user")
break;}

}
}
break;
}
