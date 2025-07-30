const tarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista');
const prioridade = document.getElementById('prioridade')
const complete = document.getElementById('complete')

function adicionar() {
    const textoTarefa = tarefa.value.trim()
    const nivelPrioridade = prioridade.value

    const li = document.createElement('li');
    li.textContent = `${textoTarefa} - ${nivelPrioridade} - ${pegarData()}`
    li.style.cssText = `
        padding: 10px;
        font-size: 30px;
    `

    if (tarefa.value === '') {
        return
    }

    if (prioridade.value === 'Baixa') {
        li.style.backgroundColor = '#233D59'
        li.style.color = '#208684'
    } else if (prioridade.value === 'Média') {
        li.style.backgroundColor = '#233D59'
        li.style.color = '#FCC361'
    } else {
        li.style.backgroundColor = '#233D59'
        li.style.color = '#E1444D'
    }

    const btnRemover = document.createElement('button')
    btnRemover.textContent = 'Remover'
    btnRemover.style.cssText = `
        margin-left: 10px;
        padding: 8px;
        font-size: 17px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: #d7464dff;
        font-weight: 100;
        color: #fff;
    `
    btnRemover.addEventListener('click', function () { li.remove() })
    btnRemover.addEventListener('mouseover', function () {
        btnRemover.style.backgroundColor = '#b03131ff'
    })  

    btnRemover.addEventListener('mouseout', function () {
        btnRemover.style.backgroundColor = '#d7464dff'
    })

    li.appendChild(btnRemover)

    lista.appendChild(li)

    const btnComplete = document.createElement('button')
    btnComplete.textContent = "Concluir"
    btnComplete.style.cssText = `
        margin-left: 3px;
        padding: 8px;
        font-size: 17px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: #25db7aff;
        font-weight: 100;
        color: #fff;
    `
    btnComplete.addEventListener('mouseover', function () {
        btnComplete.style.backgroundColor = '#1d8f5aff'
    })
    btnComplete.addEventListener('mouseout', function () {
        btnComplete.style.backgroundColor = '#25db7aff'
    })

    btnComplete.addEventListener('click', function () {
        li.remove()
        const liComplete = document.createElement('li')
        liComplete.textContent = `${textoTarefa} - ${nivelPrioridade} - ${pegarData()}`
        liComplete.style.cssText = `
            padding: 10px;
            font-size: 30px;
            background-color: #233D59;
            color: #eae8e8ff;
        `
        complete.appendChild(liComplete)
    })

    li.appendChild(btnComplete)

    tarefa.value = ''
    tarefa.focus()

    prioridade.value = 'Baixa'
    prioridade.focus()
}

function pegarData() {
    const data = new Date()
    const dia = data.getDate()
    const mes = data.toLocaleString('default', { month: 'long' })
    const hora = data.getHours()
    const minutos = data.getMinutes()

    return `${dia} de ${mes} \n às ${hora}:${minutos}`
}