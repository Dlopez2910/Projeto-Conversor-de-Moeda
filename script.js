const convertButton = document.querySelector('.convert-button');

function convertvalues(){  
    const inputCurrencyValue = document.querySelector('.input-currency').value;
   
    const dolarToday = 5.2;
   


const convertedDolarValue = inputCurrencyValue / dolarToday;

    
    console.log(convertedDolarValue);
    
}

convertButton.addEventListener("click", convertvalues); 