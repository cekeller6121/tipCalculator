console.log("scripts connected");

function removeDollar() {
  var deweyBill = document.getElementById("billAmount").value;
  var noBill = deweyBill.replace("$", "");
  document.getElementById("billAmount").value = noBill;
};

function removePerc() {
  var deweyPerc = document.getElementById("tipAmount").value;
  var noPerc = deweyPerc.replace("%", "");
  document.getElementById("tipAmount").value = noPerc;
};

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
