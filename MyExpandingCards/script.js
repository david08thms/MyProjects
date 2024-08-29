const panels = document.querySelectorAll('.panel')


panels.forEach( panel => {
    panel.addEventListener("click", e => {
        removeActiveFromAllPanels()
        panel.classList.add('active')
    })
})


function removeActiveFromAllPanels(){
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}