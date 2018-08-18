
for (let door = 1; door <=5;){
  alert("Opened" +door+"time")
  if(door>=5 ){
    alert("your door is blocked")
    let Reset = prompt("Enter 123");
    if (Reset == "123" ){
      alert("you reseted your door setting")
    break;
  }
    else (Reset == "c")
    alert("Plz Enter proper value")
  }
  door++
}
