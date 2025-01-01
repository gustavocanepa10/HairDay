import dayjs from "dayjs"

const form = document.querySelector("form")

const selectedDate = document.getElementById("date")

const clientName = document.getElementById("client")

// Carrega a data atual para o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data minima como sendo a atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener("submit", (event) => {
    
    event.preventDefault()

    try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    
    if (!name) {
        return alert("Informe o nome do cliente")
    }


    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")
    
    if (!hourSelected) {
        return alert("Selecione o horário")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour,"hour")
    

    // Gera um ID
    const id = new Date().getTime()

    console.log({
        id, 
        name,
        when,
    })




        
    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
        
    }

    


})