const button = document.getElementsByTagName('button')[0]
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

button.addEventListener('click', convertValues)