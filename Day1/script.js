const panels = document.querySelectorAll('.panel')  /*Query Selector allows to select anything
                                                    i.e h1/id/class/paragraphy 
                                                    
                                                    Query Selector All instead of selecting the element directly
                                                    it puts all the panels into nodelist which is similar to array*/


/*console.log(panels[0])*/

panels.forEach( (panel) => {
    panel.addEventListener('click',() => {
        removeActiveClasses()        
        panel.classList.add('active')
    })

    function removeActiveClasses(){
        panels.forEach( (panel) => {
            panel.classList.remove('active')
        })
    }
})
