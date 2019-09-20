console.log("select scripts connected");

function selectCountry() {

  var dropDown = document.getElementById("countriesDropdown").value;

  if (dropDown == "us") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "$20.00";
    document.getElementById("tipAmount").placeholder = "15-20%";
    document.getElementById("tipNoteField").innerHTML = "";
  };

  if (dropDown == "arge") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "$20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "";
  };

  if (dropDown == "aust") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "$20.00";
    document.getElementById("tipAmount").placeholder = "";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not expected, but no harm in rounding up or leaving a few extra dollars for excellent service";
  };

  if (dropDown == "czec") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "Kc20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>(if not included in your bill)";
  };

  if (dropDown == "uab") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>typically 10%, already included in your bill";
  };

  if (dropDown == "fran") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not expected, but no harm in rounding up or leaving a few extra dollars for excellent service - look for \"service compris\", French for service included";
  };

  if (dropDown == "ital") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not expected, but no harm in leaving a few Euros on the table, but no more than 10% - look for \"coperto\" on your bill, Italian for  cover charge";
  };

};
