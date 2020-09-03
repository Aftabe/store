// HOW TO CHANGE JSON TEXT TO JAVASCRIPT OBJECT
(function () {
  var text = '{"employees":[' +
    '{"firstName":"John","Job":"Cooking dinner" },' +
    '{"firstName":"Anna","Job":"Cleaning house" },' +
    '{"firstName":"Anna","Job":" is going to shopping" },' +
    '{"firstName":"Anna","Job":"Cleaning house" },' +
    '{"firstName":"Anna","Job":"Cooking dinner" },' +
    '{"firstName":"Peter","Job":"Free" }]}';

  obj = JSON.parse(text);
  // document.getElementById("demo").innerHTML =
  // obj.employees[1].firstName + " " + obj.employees[1].lastName;
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday, " + obj.employees[0].firstName + " " + obj.employees[0].Job;
      break;
    case 1:
      day = "Monday " + obj.employees[1].firstName + " " + obj.employees[1].Job;
      console.log(day);
      break;
    case 2:
      day = "Tuesday, " + obj.employees[2].firstName + " " + obj.employees[2].Job;
      break;
    case 3:
      day = "Wednesday " + obj.employees[3].firstName + " " + obj.employees[3].Job;
      break;
    case 4:
      day = "Thursday " + obj.employees[3].firstName + " " + obj.employees[3].Job;
      break;
    case 5:
      day = "Friday " + obj.employees[4].firstName + " " + obj.employees[4].Job;
      console.log(day);
      break;
    case 6:
      day = "Saturday " + obj.employees[5].firstName + " " + obj.employees[5].Job;
  }
  document.getElementById('demo').innerHTML = "today is " + day;
  alert(day);
}());

// (function(){
//   const buttons = document.getElementsByClassName('btn');
  
//   for(let i = 0, len = buttons.length; i < len; i + 1){
//     buttons[i].onclick = function(){
//       let className = this.innerHTML.toLowerCase();
//       document.body.className = className;
//     }
//   }
// }());