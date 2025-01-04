import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
    try {
        

        // Fazendo a requisição DELETE
        const response = await fetch(`${apiConfig.baseURL}/schedules/${id.toString()}`, {
            method: "DELETE",
        });

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao cancelar o agendamento");
        }

        alert("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.log("Erro ao cancelar o agendamento:", error);
        alert(`Não foi possível cancelar o agendamento. Erro: ${error.message}`);
    }
}
