const convertButton = document.querySelector('.convert-button');

function convertvalues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueReal = document.querySelector('.currency-value-real');
    const currencyValueDolar = document.querySelector('.currency-value-dolar');

    const dolarToday = 5.2;



    const convertedDolarValue = inputCurrencyValue / dolarToday;

    currencyValueReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue);
    currencyValueDolar.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(convertedDolarValue);

    console.log(convertedDolarValue);

}

convertButton.addEventListener("click", convertvalues); 