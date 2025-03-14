let accordionList = document.querySelectorAll('.accordion__list')

accordionList.forEach(item => {
    let accordion = item.querySelectorAll('.accordion')
    
    accordion.forEach(elem => {
        elem.addEventListener('click', () => {
            
            if(!elem.classList.contains('active')){
                accordion.forEach(all => {
                    all.classList.remove('active')
                })
            }
            
            elem.classList.toggle('active')
        })
    })
})