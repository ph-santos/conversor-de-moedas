const button = document.getElementsByTagName('button')[0]
const dollar = 5.2

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    
    const conversion = input / dollar
    
    realValueText.innerHTML = input
    currencyValueText.innerHTML = conversion
}

button.addEventListener('click', convertValues)