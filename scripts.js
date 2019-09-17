console.log("scripts connected");

// var billAmount = document.getElementById("billAmount").value;
//
// var tipAmount = document.getElementById("tipAmount").value / 100;
//
// var total;

function calculateTip() {

  var billAmount = document.getElementById("billAmount").value;

  var tipAmount = document.getElementById("tipAmount").value / 100;

  var total = (billAmount * tipAmount);

  // alert(Math.ceil(total));

  var roundedAmt = Math.ceil(total);
  var billTotal = (parseFloat(roundedAmt) + parseFloat(billAmount));

  document.getElementById("displayField").innerHTML = "Bill: $" + billAmount + "<br>" + "Tip: $" + roundedAmt + "<br>" + "Total: $" + billTotal + "<br><br>";

  return false;

};

function clearHTML() {
  document.getElementById("displayField").innerHTML = "";
};

document.getElementById("submitButton").onclick = function() {

    calculateTip();

};
