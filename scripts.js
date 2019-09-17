console.log("scripts connected");

var total;

function calculateTip() {

  var billAmount = document.getElementById("billAmount").value;

  var tipAmount = document.getElementById("tipAmount").value / 100;

  if (billAmount || tipAmount == 0) {
    console.log("bill amount or tip amount equal 0");
    // alert("Please enter both a Bill amount and Tip amount");
  } else {

    var total = (billAmount * tipAmount);
    alert(Math.round(total));

  }

};

document.getElementById("submitButton").onclick = function() {

  calculateTip();

};
