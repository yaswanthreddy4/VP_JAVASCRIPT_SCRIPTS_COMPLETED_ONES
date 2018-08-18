let course = [{
  name: "UI",
  days: 30,
  fee: 2500,
  trainer: "John"
},
{ name: "MEAN",
  days: 60,
  fee: 5000,
  trainer: "Smith"}];
  let select = +prompt(`Select Your Course
  1.UI
  2.MEAN`);
  var selectCourse = function selectCourse (){

    for (index=1; index<=course.length; index++){
      if(index==select)
      {
    console.log(course[index-1]);
}
    }
  }
  if (select ==1){
    selectCourse();
  }
  else if (select ==2) {
    selectCourse();

  }else {
    alert ("You Have Choosen Wrong OPtion, PLease Try Again later")
  }
