export function hourClick() {
    const hours = document.querySelectorAll('.hour-available');
    

   hours.forEach((available) => {
    available.addEventListener("click", (selected) => {


        
    
    // Removendo a classe de horários não selecionados
    hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
    
    })
    

    // E logo em seguida adiciona quando é selecionado
    selected.target.classList.add("hour-selected")
    
    })
    

    })

}