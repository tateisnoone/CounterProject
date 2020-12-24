let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let result = 0;
plus.onclick = function() {
    result += 1;
    number.innerHTML = result;
  };
  
  minus.onclick = function() {
    result -= 1;
    number.innerHTML = result;
  }
  