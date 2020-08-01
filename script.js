


function calculateTip(event) {

    event.preventDefault()

    var billAmt = document.getElementById("billamt").value;

    var tipPercent = document.getElementById("tip-percent");

    var tipTotalDisplay = document.getElementById("tip-total-display");

    var newTotalDisplay = document.getElementById("new-total-display");

    var tipTotal = parseFloat(billAmt) * parseFloat(tipPercent.value * .01);

    tipTotalDisplay.textContent = tipTotal;

    var newTotal = (tipTotal + parseFloat(billAmt));

    newTotalDisplay.textContent = newTotal;

}

function spiltTip(event) {

    event.preventDefault()

    var numPeople = document.getElementById("num-people").value;

    var newTotalDisplay = document.getElementById("new-total-display").textContent;

    var totalPerPerson = document.getElementById("total-perperson");

    var totalDivided = (newTotalDisplay / numPeople).toFixed(2);

    totalPerPerson.textContent = totalDivided;

}

document.getElementById("submit").addEventListener("click", calculateTip);
document.getElementById("split").addEventListener("click", spiltTip);