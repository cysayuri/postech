let abas = document.querySelectorAll('.abas')

abas.forEach(elem => {
    let aba = elem.querySelectorAll('.abas__topic-item')
    let abaContent = elem.querySelectorAll('.abas__body-content')
    
    aba.forEach(item => {
        item.addEventListener('click', () => {
            aba.forEach(aba => {
                aba.classList.remove('active')
            })
            abaContent.forEach(content => {
                content.classList.remove('active')
            })
            
            item.classList.add('active')
            id = item.getAttribute('id')
            
            abaContent.forEach(item => {
                idContent = item.getAttribute('id')
                
                if ('tab-' + id == idContent) {
                    item.classList.add('active')
                }
            })
        })
    })
})