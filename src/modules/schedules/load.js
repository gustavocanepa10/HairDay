// Carregamento dos horários do dia.


import {hoursLoad} from "../form/hour-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
    // Obtém a data do input

    const date = selectedDate.value
    // Renderiza as horas disponiveis.
    hoursLoad({date})
    

}