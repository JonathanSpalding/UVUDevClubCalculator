function add(a,b){return a + b}
function subtract(a,b){return a - b}
function multiply(a,b){return a * b}
function divide(a,b){return a / b}
var addButton = document.getElementById("addbutton");
var subtractButton = document.getElementById("subtractbutton");
var multiplyButton = document.getElementById("multiplybutton");
var divideButton = document.getElementById("dividebutton");
var nineButton = document.getElementById("ninebutton");
var eightButton = document.getElementById("eightbutton");
var sevenButton = document.getElementById("sevenbutton");
var sixButton = document.getElementById("sixbutton");
var fiveButton = document.getElementById("fivebutton");
var fourButton = document.getElementById("fourbutton");
var threeButton = document.getElementById("threebutton");
var twoButton = document.getElementById("twobutton");
var oneButton = document.getElementById("onebutton");
var zeroButton = document.getElementById("zerobutton");
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
nineButton.addEventListener("click", function(){display.innerHTML += 9});
subtractButton.addEventListener("click", subtract());
nineButton.addEventListener("click", function(){display.innerHTML += 8});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 7});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 6});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 5});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 4});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 3});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 2});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 1});
subtractButton.addEventListener("click", subtract);
nineButton.addEventListener("click", function(){display.innerHTML += 0});
