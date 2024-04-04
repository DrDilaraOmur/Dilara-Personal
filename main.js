const setup = () => {
    const form = document.getElementById('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nameInput = document.getElementById('name-input').value
        const emailInput = document.getElementById('email-input').value
        const phoneInput = document.getElementById('phone-input').value
        const messageBody = document.getElementById('message-input').value

        console.log('here')
        window.open(
            `mailto:test@example.com?subject=New Enquiry: ${nameInput}&body=Name: ${nameInput}\n\nPhone:${
                phoneInput || 'XXXX'
            }\n\nEmail: ${emailInput || 'XXXX'}\n\n${messageBody}`
        )
    })
    addMap()
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
