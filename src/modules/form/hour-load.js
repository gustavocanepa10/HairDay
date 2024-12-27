import {openingHours} from "../../utils/opening-hour.js"
import dayjs from "dayjs"

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {

        const [scheduleHour,_] = hour.split(":")
        

        // Adiciona a hora na data e verifica se está no passado.

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        console.log(isHourPast)
    })

}