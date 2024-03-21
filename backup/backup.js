const setup = () => {
    const elements = document.getElementsByTagName('button')
    const contentSections = document.getElementsByClassName('content-section')

    const selectedColour = 'rgb(158, 128, 168)'
    const unselectedColour = 'rgba(158, 128, 168, 0.07)'
    const backgroundColour = 'rgb(246, 241, 235)'
    const textColour = '#515a5d'

    const setElementStyles = (selectedElement) => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i]

            if (element !== selectedElement) {
                element.style.backgroundColor = unselectedColour
                element.style.color = textColour
            } else {
                element.style.backgroundColor = selectedColour
                element.style.color = backgroundColour
            }
        }
        setContentVisibility(selectedElement.value)
    }

    const setContentVisibility = (id) => {
        for (let i = 0; i < contentSections.length; i++) {
            const section = contentSections[i]
            section.style.display = 'none'
        }
        document.getElementById(id).style.display = 'block'
    }

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        element.addEventListener('click', (event) => {
            setElementStyles(event.currentTarget)
        })
    }
}

setup()
