const setup = () => {
    const form = document.getElementById('form')

    setupEmail()

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nameInput = document.getElementById('name-input').value
        const emailInput = document.getElementById('email-input').value
        const phoneInput = document.getElementById('phone-input').value
        const messageBody = document.getElementById('message-input').value

        emailjs.send('XXXXX', 'XXXXX', {
            enquiry_name: nameInput || 'XXXXX',
            enquiry_phone: phoneInput || 'XXXXX',
            enquiry_email: emailInput || 'XXXXX',
            message: messageBody || 'XXXXX',
        })
    })
    addMap()
}

const setupEmail = () => {
    emailjs.init({
        publicKey: 'XXXXX', // CHANGE ME
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