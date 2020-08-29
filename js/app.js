// First code block
(function () {
  let day,
  name = document.createElement('div');
  name.className = 'style';
  name.id = 'style';
  name.innerText = 'Khadim';

  const mod = name;

  console.log(mod);

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
      day = `Thursday Ali can cook something for dinner`;
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = `Saturday ${mod.innerText} can clean the house`;
  }
  document.getElementById("demo").innerHTML = "Today is " + day;
  alert('today is ' + day);
}());

// Second code block
// HOW TO CHANGE JSON TEXT TO JAVASCRIPT OBJECT
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
