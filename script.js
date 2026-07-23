const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const currencyValueConverted = document.querySelector('.currency-value-converted');


function convertvalues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueReal = document.querySelector('.currency-value-real');
    const currencyValueDolar = document.querySelector('.currency-value-converted');
    const currencyValueEuro = document.querySelector('.currency-value-converted');
    const currencyValueBitcoin = document.querySelector('.currency-value-converted');



    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 1.2;




    if (currencySelect.value == "USD") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' })
            .format(inputCurrencyValue / dolarToday);
    }


    if (currencySelect.value == "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' })
            .format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' })
            .format(inputCurrencyValue / bitcoinToday);
    }



    currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' })
        .format(inputCurrencyValue);

        

}

function changeCurrency() {

    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if (currencySelect.value == "USD") {
        currencyName.innerHTML = "US$ Dólar Americano";
        currencyImage.src = "./img/estados-unidos (1) 1.png";
        
    }
    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "€ Euro";
        currencyImage.src = "./img/Design sem nome 3.png";
    }
    if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "(₿) Bitcoin";
        currencyImage.src = "./img/bitcoin 1.png";
    }

    convertvalues()

}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertvalues);
