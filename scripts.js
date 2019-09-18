console.log("scripts connected");

function calculateTip() {

  var billAmount = document.getElementById("billAmount").value;

  var tipAmount = document.getElementById("tipAmount").value / 100;

  var total = (billAmount * tipAmount);

  var roundedAmt = Math.ceil(total);
  var billTotal = (Number(roundedAmt) + Number(billAmount));
  var billTotal = billTotal.toFixed(2);

  document.getElementById("displayField").innerHTML = "Bill: $" + billAmount + "<br>" + "Tip: $" + roundedAmt + "<br>" + "Total: $" + billTotal + "<br><br>";

};

function clearHTML() {
  document.getElementById("displayField").innerHTML = "";
};

document.getElementById("submitButton").onclick = function() {

    calculateTip();

};
