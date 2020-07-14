'use strict';
function showDate() {
    let today = new Date();
    let formatDate = today.toDateString();
    let selectElement = document.getElementById('date');
    selectElement.innerHTML = formatDate;
    console.log ('here\'s a hidden message');
}

function msgMalu(txtMalu) {
    alert(txtMalu);
}

function msgMalu2(txtMalu) {
    document.body.innerHTML += '<br>' + txtMalu;
}
