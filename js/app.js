// First code block
(function () {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("demo").innerHTML = "Today is " + day;
  alert('today is ' + day);
}());

// Second code block
(function(){
  var text = '{"employees":[' +
'{"firstName":"Ali","lastName":"Sdafi" },' +
'{"firstName":"Khan","lastName":"Baqiri" },' +
'{"firstName":"Mahdi","lastName":"Khadimi" }]}';

obj = JSON.parse(text);
document.getElementById("test").innerHTML =
obj.employees[0].firstName + " " + obj.employees[0].lastName;

document.write(obj.employees[1].firstName + ' ' + obj.employees[1].lastName)
}());
