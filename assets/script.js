const button = document.getElementsByTagName('button')[0]
const dollar = 5.2

const convertValues = () => {
    const input = document.getElementById('input-real').value

    const conversion = input * dollar

    console.log(conversion)
}

button.addEventListener('click', convertValues)