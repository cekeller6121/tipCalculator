console.log("scripts connected");

var billAmount = document.getElementById("billAmount").value;

var tipAmount = document.getElementById("tipAmount").value / 100;

function calculateTip() {

  var billAmount = document.getElementById("billAmount").value;

  var tipAmount = document.getElementById("tipAmount").value / 100;

  var total = (billAmount * tipAmount);

  // alert(Math.round(total));
  return total;

};

document.getElementById("submitButton").onclick = function() {

  calculateTip();

  alert(total);

};
