const button = document.querySelector('.tooltip')
const tooltip = document.querySelector('.tooltip__txt')

const popperInstance = Popper.createPopper(button, tooltip, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        },
    ],
})

function show() {
    tooltip.setAttribute('data-show', '')
    
    popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: true },
        ],
    }))
    
    popperInstance.update()
}

function hide() {
    tooltip.removeAttribute('data-show')
    
    popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
        ],
    }))
}

const showEvents = ['mouseenter', 'focus']
const hideEvents = ['mouseleave', 'blur']

showEvents.forEach((event) => {
    button.addEventListener(event, show);
})

hideEvents.forEach((event) => {
    button.addEventListener(event, hide);
})