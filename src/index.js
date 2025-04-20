const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const secondMySub = document.getElementById('secondMySub');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

secondMySub.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `Você clicou!`;
    } else {
        subResult.textContent = `Você não clicou!`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `Você está pagando com Visa`;
    } else if (mastercardBtn.checked) {
        paymentResult.textContent = `Você está pagando com Mastercard`;
    } else if (paypalBtn.checked) {
        paymentResult.textContent = `Você está pagando com Paypal`;
    } else {
        paymentResult.textContent = `Selecione um tipo de pagamento!`;
    }
}