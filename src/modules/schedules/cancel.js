
import {scheduleCancel} from "../../services/schedule-cancel.js"
import {schedulesDay} from "./load.js"

const periods = document.querySelectorAll(".period")


// Gera evento de clique para cada lista(manhã, tarde e noite)

periods.forEach((period) => {
    // Capturar evento de clique na lista

    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // Obtém o li do elemento clicado
            const item = event.target.closest("li")
            const {id} = item.dataset
            
            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
            }

            if(isConfirm) {
                await scheduleCancel({id})
                schedulesDay()
            }
        }

    })
})