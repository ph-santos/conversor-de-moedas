const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select')

const dollarValue = 5.2

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    
    const conversion = input / dollarValue

    const realFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)    

    const  dollarFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(conversion)    

    
    realValueText.innerHTML = realFormat
    currencyValueText.innerHTML = dollarFormat
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/images/euro.svg'

    } else {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/images/estados-unidos.svg'
    }

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)