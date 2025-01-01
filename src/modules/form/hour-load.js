// Sessão de horas.
import {openingHours} from "../../utils/opening-hour.js"
import dayjs from "dayjs"
import { hourClick } from "./hour-click.js"

// Lista das horas(ul)
const hoursList = document.getElementById("hours")

export function hoursLoad({ date }) {

    // Limpa a lista de horários
    hoursList.innerHTML = ""

    const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":")
    
    

    
    

        

    // Adiciona a hora na data e verifica se está no passado.
    // Verificação dos horários.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    
    // Define se o horário está disponivel.
    return {
        hour,
        available: isHourPast,
        }
        
    })
    
    // Renderizar os horários.
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        
        li.classList.add("hour")
        li.textContent = hour
        li.classList.add(available ? "hour-available" : "hour-unavailable")
       
        
        if (hour === "09:00") {
            hourHeaderAdd("Manhã")
        
        } else if(hour === "13:00" ) {
            hourHeaderAdd("Tarde")
        
        } else if(hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hoursList.append(li)





    })

    // Adiciona o evento de clique nos horários disponiveis.
    hourClick()

}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hoursList.append(header)
}