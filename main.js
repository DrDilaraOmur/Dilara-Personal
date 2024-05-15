const setup = () => {
    const form = document.getElementById('form')
    const toastNotification = document.getElementById('toast-notification')

    const removeActiveNotification = () => {
        toastNotification.classList.remove('notification-active')
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nameInput = document.getElementById('name-input')
        const emailInput = document.getElementById('email-input')
        const phoneInput = document.getElementById('phone-input')
        const messageBody = document.getElementById('message-input')
        const submitButton = document.getElementById('submit-button')

        nameInput.setAttribute('disabled', true)
        emailInput.setAttribute('disabled', true)
        phoneInput.setAttribute('disabled', true)
        messageBody.setAttribute('disabled', true)
        submitButton.setAttribute('disabled', true)

        try {
            emailjs.send(
                process.env.EMAIL_SERVICE_ID,
                process.env.EMAIL_TEMPLATE_ID,
                {
                    enquiry_name: nameInput.value || 'XXXXX',
                    enquiry_phone: phoneInput.value || 'XXXXX',
                    enquiry_email: emailInput.value || 'XXXXX',
                    message: messageBody.value || 'XXXXX',
                }
            )
            toastNotification.classList.add('notification-active')

            setTimeout(removeActiveNotification, 2000)
        } catch (err) {
            console.log('error: ', err)
        }
    })
    setupEmail()
    addMap()
}

const setupEmail = () => {
    emailjs.init({
        publicKey: process.env.EMAIL_PUBLIC_KEY, // CHANGE ME
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 100s
            throttle: 100000,
        },
    })
}

const addMap = () => {
    const greenIcon = L.icon({
        iconUrl: './assets/svgs/map-pin.svg',
        iconSize: [40, 90], // size of the icon
        iconAnchor: [20, 70], // point of the icon which will correspond to marker's location
    })

    const map = L.map('map').setView([51.617898, -0.185547], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([51.617898, -0.185547], {
        icon: greenIcon,
    }).addTo(map)
}

setup()
addMap()
