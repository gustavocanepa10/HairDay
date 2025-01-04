import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`);
        
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao buscar os agendamentos");
        }

        // Converte para JSON
        const data = await response.json();
        console.log(data)

        // Filtra pelos dia selecionado
        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        );

        return dailySchedules;
    
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia");
    }
}
