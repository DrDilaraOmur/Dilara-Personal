const setup = () => {
    const form = document.getElementById('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nameInput = document.getElementById('name-input').value
        const emailInput = document.getElementById('email-input').value
        const phoneInput = document.getElementById('phone-input').value
        const messageBody = document.getElementById('message-input').value
        // const submitInput = document.getElementById('submit-button')

        console.log(nameInput, emailInput, phoneInput, messageBody)
        console.log('here')
        window.open(`mailto:test@example.com?subject=subject&body=body`)
    })
}

setup()
