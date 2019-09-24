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
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not expected, but no harm in rounding up or leaving a few extra Euros for excellent service - look for \"service compris\", French for service included";
  };

  if (dropDown == "ital") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not expected, but no harm in leaving a few Euros on the table, but no more than 10% - look for \"coperto\" on your bill, Italian for  cover charge";
  };

  if (dropDown == "japa") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "-";
    document.getElementById("tipAmount").placeholder = "-";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>for the most part, the Japanese keep it simple - don’t tip whether you’re at a restaurant, bar, or ramen shop. Good service is simply part of Japanese life";
  };

  if (dropDown == "moro") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "5-10%";
    document.getElementById("tipNoteField").innerHTML = "";
  };

  if (dropDown == "mexi") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "";
  };

  if (dropDown == "spai") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>typically included in your bill; for exceptional service at a high end restaurant add 10%";
  };

  if (dropDown == "safr") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "";
  };

  if (dropDown == "thai") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "-";
    document.getElementById("tipAmount").placeholder = "-";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>not necessary, however, it’s always appreciated to leave a few baht on the table";
  };

  if (dropDown == "ukin") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>(if not included in your bill)";
  };

  if (dropDown == "chin") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "-";
    document.getElementById("tipAmount").placeholder = "-";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>tipping has never been part of life in China";
  };

  if (dropDown == "port") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "5% (coffee) 10% (restaurants)";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>5% at coffee shops, 10% at restaurants; the more service, the more tip - always check the bill to see if service as already been added";
  };

  if (dropDown == "viet") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "5-10%";
    document.getElementById("tipNoteField").innerHTML = "";
  };
  if (dropDown == "turk") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>10-15% in higher end spots or restaurants in tourist-heavy areas - not expected, but always appreciated in inexpensive establishments";
  };

  if (dropDown == "hung") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>(check for included service)";
  };

  if (dropDown == "russ") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>optional, but appreciated - most people leave 10-15%";
  };

  if (dropDown == "nepa") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "5-10%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>(should only reward good work)";
  };

  if (dropDown == "indo") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>(if not included in bill) not customary, but increasingly more common";
  };

  if (dropDown == "neth") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "5-10%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>Amsterdam has a law stating that restaurants must include a service charge in the price of the meal - most people leave 5-10%";
  };

  if (dropDown == "camb") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "-";
    document.getElementById("tipAmount").placeholder = "-";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>always welcome; a dollar or two is the norm";
  };

  if (dropDown == "peru") {
    document.getElementById("displayField").innerHTML = "";
    document.getElementById("billAmount").placeholder = "20.00";
    document.getElementById("tipAmount").placeholder = "10-15%";
    document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>10-15% at a hotel bar or a high-end restaurant; a few soles at a mom and pop spot";
  };

};

// template
/*
if (dropDown == "") {
  document.getElementById("displayField").innerHTML = "";
  document.getElementById("billAmount").placeholder = "20.00";
  document.getElementById("tipAmount").placeholder = "";
  document.getElementById("tipNoteField").innerHTML = "<font color=\"red\">note: </font>";
};
*/











// *** intentionally left blank ***
