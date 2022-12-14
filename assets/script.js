const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select')

const dollarValue = 5.20
const euro = 5.23
const bitcoin = 105208.14

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)    

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dollarValue)

    } else if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / euro) 

    } else {
        
        const bitcoinConvert = input / bitcoin

        currencyValueText.innerHTML = bitcoinConvert

    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    const currencyValueText = document.getElementById('currency-value-text')
    const realValueText = document.getElementById('real-value-text')

    if (select.value === "€ Euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/images/euro.svg'
        currencyValueText.innerHTML = '00,0'
        realValueText.innerHTML = '00,0'

    } else if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/images/estados-unidos.svg'
        currencyValueText.innerHTML = 'US$ 00,0'
        realValueText.innerHTML = '00,0'

    } else {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/images/bitcoin.svg'
        currencyValueText.innerHTML = '0'
        realValueText.innerHTML = '0,00'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)