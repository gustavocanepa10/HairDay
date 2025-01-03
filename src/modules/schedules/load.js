// Carregamento dos horários do dia.
import {schedulesShow} from "../schedules/show.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hour-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtém a data do input
    
    // Obtém a hora do input
    const date = selectedDate.value

    // Busca na API os agendamentos.
    const dailySchedules = await scheduleFetchByDay({date})
    
    // Exibi os agendamentos
    schedulesShow({dailySchedules})


    // Renderiza as horas disponiveis.
    hoursLoad({date, dailySchedules})
    

}