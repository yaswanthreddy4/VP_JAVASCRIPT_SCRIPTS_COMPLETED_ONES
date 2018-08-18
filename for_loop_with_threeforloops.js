//array with three for nestedloops
let jobs = ["software", "hardware", "electrical", "electronics", "civil", "mechanical", "mining"];
let name = "yaswanth";
let age = 25;
let places = ["hyderabad", "mumbai", "bangalore", "delhi", "chennai"];
let education = "btech";
let passedout = 2015;
let college = "MREC"
let combo = [jobs, places, name];
for (index = 0; index < combo.length; index++) {
  console.log(combo[index]);
  for (innIndex = 0; innIndex < combo[index].length; innIndex++) {
    console.log(combo[index][innIndex]);
    if(combo[index][innIndex] == name){
      continue;
    }
    for (innInnIndex = 0; innInnIndex < combo[index][innIndex].length; innInnIndex++) {
      console.log(combo[index][innIndex][innInnIndex]);
    }
  }
}
