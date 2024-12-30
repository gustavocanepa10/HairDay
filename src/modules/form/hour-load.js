import {openingHours} from "../../utils/opening-hour.js"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

        

    // Adiciona a hora na data e verifica se está no passado.
    // Verificação dos horários.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
    // Defini se o horário está disponivel
    return {
        hour,
        available: isHourPast,
        }
    })

    // Renderizar os horários.
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour
        hours.append(li)





    })

}