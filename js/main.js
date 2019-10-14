// Request Variable
var rqst = new XMLHttpRequest();

// GET request on the URL endpoint
rqst.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);

rqst.onload = function () {

//store JSON in data variable
var data = JSON.parse(this.response);

console.log("success got data", data);
// USD
document.getElementById("display").innerHTML = data.bpi.USD.rate;
document.getElementById("symbol").innerHTML = data.bpi.USD.symbol;
document.getElementById("desc").innerHTML = data.bpi.USD.description;
// EUR
document.getElementById("eur_display").innerHTML = data.bpi.EUR.rate;
document.getElementById("eur_symbol").innerHTML = data.bpi.EUR.symbol;
document.getElementById("eur_desc").innerHTML = data.bpi.EUR.description;
// GBP
document.getElementById("gbp_display").innerHTML = data.bpi.GBP.rate;
document.getElementById("gbp_symbol").innerHTML = data.bpi.GBP.symbol;
document.getElementById("gbp_desc").innerHTML = data.bpi.GBP.description;
}
// Send request
rqst.send();


