let conversion;
let convertedAmount;
let transaction;
let prefix_to;
let amount;

function start() {
    amount = prompt("Enter Amount");
    amount = parseFloat(amount);
    document.getElementById("amountToBeConverted").innerHTML = " " + amount;
    return amount;
}

var dollarsToEuros = (amount) => {
    transaction = "Dollars To Euros";
    prefix_to = '&euro;';
    convertedAmount = prefix_to + (amount * 0.89).toFixed(2);
    return convertedAmount;
}

var eurosToDollars = (amount) => {
    transaction = "Euros To Dollars";
    prefix_to = '$';
    convertedAmount = prefix_to + (amount / 0.89).toFixed(2);
    return convertedAmount;
}

function displayRecord(transaction, amount) {
    let transactionArea = document.getElementById("transaction");
    let totalsArea = document.getElementById("totals");
    transactionArea.innerHTML = transaction;
    totalsArea.innerHTML = amount;
}

var convert = (callback) => {
    let value;
    value = callback(amount);
    displayRecord(transaction, value);
    return value;
}