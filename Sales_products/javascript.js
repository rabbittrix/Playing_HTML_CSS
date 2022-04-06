'use strict'

//variables
let sumMozzarella = 0;
let sumMixed = 0;
let sumRomana = 0;
let saleMozzarella = 0.00;
let saleMixed = 0.00;
let saleRomana = 0.00;

let btnSales = document.getElementById('sales');
let btnReversal = document.getElementById('reversal');
let btnExport = document.getElementById('exported');

//events
btnSales.addEventListener('click', sales, false);
btnReversal.addEventListener('click', reversal, false);
btnExport.addEventListener('click', exported, false);

//function
function sales(e) {
    if (document.getElementById('mozzarella').checked) {
        sumMozzarella = sumMozzarella + 1;
        saleMozzarella = saleMozzarella + 25.00;
        document.getElementById('qtdM').innerHTML = sumMozzarella;
        document.getElementById('vendaM').innerHTML = saleMozzarella.toFixed(2);
    } else if (document.getElementById('mixed').checked) {
        sumMixed = sumMixed + 1;
        saleMixed = saleMixed + 30.00;
        document.getElementById('qtdMx').innerHTML = sumMixed;
        document.getElementById('vendaMx').innerHTML = saleMixed.toFixed(2);
    } else if (document.getElementById('romana').checked) {
        sumRomana = sumRomana + 1;
        saleRomana = saleRomana + 35.00;
        document.getElementById('qtdR').innerHTML = sumRomana;
        document.getElementById('vendaR').innerHTML = saleRomana.toFixed(2);
    }
}

function reversal(e) {
    if (document.getElementById('mozzarella').checked) {
        sumMozzarella = sumMozzarella - 1;
        saleMozzarella = saleMozzarella - 25.00;
        if (sumMozzarella < 0) {
            sumMozzarella = 0;
            saleMozzarella = 0;
        }
        document.getElementById('qtdM').innerHTML = sumMozzarella;
        document.getElementById('vendaM').innerHTML = saleMozzarella.toFixed(2);
    } else if (document.getElementById('mixed').checked) {
        sumMixed = sumMixed - 1;
        saleMixed = saleMixed - 30.00;
        if (sumMixed < 0) {
            sumMixed = 0;
            saleMixed = 0;
        }
        document.getElementById('qtdMx').innerHTML = sumMixed;
        document.getElementById('vendaMx').innerHTML = saleMixed.toFixed(2);
    } else if (document.getElementById('romana').checked) {
        sumRomana = sumRomana - 1;
        saleRomana = saleRomana - 35.00;
        if (sumRomana < 0) {
            sumRomana = 0;
            saleRomana = 0;
        }
        document.getElementById('qtdR').innerHTML = sumRomana;
        document.getElementById('vendaR').innerHTML = saleRomana.toFixed(2);
    }
}

function exported(e) {
    TableToExcel.convert(document.getElementById('table'));
}