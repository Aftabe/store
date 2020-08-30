
// HOW TO CHANGE JSON TEXT TO JAVASCRIPT OBJECT
(function(){
  var text = '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';
  
  obj = JSON.parse(text);
  document.getElementById("test").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday " + obj.employees[0].firstName + " " + obj.employees[0].lastName + " " + obj.employees[0].job;
//     console.log(day);
//     break;
//   case 1:
//     day = `Monday${obj.employees[1].firstName} ${obj.employees[1].lastName} ${obj.employees[1].job}`;
//     break;
//   case 2:
//     day = "Tuesday" + obj.employees[2].firstName + " " + obj.employees[2].lastName + " " + obj.employees[2].job;
//     break;
//   case 3:
//     day = "Wednesday" + obj.employees[3].firstName + " " + obj.employees[3].lastName + " " + obj.employees[3].job;
//     break;
//   case 4:
//     day = "Thursday" + obj.employees[3].firstName + " " + obj.employees[3].lastName + " " + obj.employees[3].job;
//     break;
//   case 5:
//     day = "Friday" + obj.employees[4].firstName + " " + obj.employees[4].lastName + " " + obj.employees[4].job;
//     break;
//   case 6:
//     day = "Saturday" + obj.employees[3].firstName + " " + obj.employees[3].lastName + " " + obj.employees[3].job;
// }
// document.getElementById('demo').innerHTML = "today is " + day;
}());




















// First code block
// (function () {
//   let day,
//   name = document.createElement('div');
//   name.className = 'style';
//   name.id = 'style';
//   name.innerText = 'Khadim';

//   const mod = name;

//   console.log(mod);

//   switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = `Thursday Ali can cook something for dinner`;
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = `Saturday ${mod.innerText} can clean the house`;
//   }
//   document.getElementById("demo").innerHTML = "Today is " + day;
//   alert('today is ' + day);
// }());

// Second code bl