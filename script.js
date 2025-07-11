const tarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista');
const prioridade = document.getElementById('prioridade')
const complete = document.getElementById('complete')

function adicionar() {
    const textoTarefa = tarefa.value.trim()
    const nivelPrioridade = prioridade.value

    const li = document.createElement('li');
    li.textContent = `${textoTarefa} - ${nivelPrioridade} - ${pegarData()}`

    if (tarefa.value === '') {
        return
    }

    if (prioridade.value === 'Baixa') {
        li.style.border = '3px solid #35eb35'
        li.style.backgroundColor = '#0c294c'
        li.style.color = '#35eb35'
    } else if (prioridade.value === 'Média') {
        li.style.border = '3px solid #e6e638'
        li.style.backgroundColor = '#0c294c'
        li.style.color = '#e6e638'

    } else {
        li.style.border = '3px solid #E74C3C'
        li.style.backgroundColor = '#0c294c'
        li.style.color = '#E74C3C'
    }

    const btnRemover = document.createElement('button')
    btnRemover.textContent = 'Remover'
    btnRemover.style.cssText = `
        margin-left: 10px;
        padding: 8px;
        font-size: 14px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: #E74C3C;
        font-weight: 100;
    `
    btnRemover.addEventListener('click', function () { li.remove() })

    li.appendChild(btnRemover)

    lista.appendChild(li)

    const btnComplete = document.createElement('button')
    btnComplete.textContent = "Concluir"
    btnComplete.style.cssText = `
        margin-left:
    `
    btnComplete.style.marginLeft = '3px'
    btnComplete.style.padding = '8px'
    btnComplete.style.fontSize = '14px'
    btnComplete.style.borderRadius = '10px'
    btnComplete.style.border = 'none'
    btnComplete.style.cursor = 'pointer'
    btnComplete.style.backgroundColor = '#35eb35'
    btnComplete.style.fontWeight = '100'

    btnComplete.addEventListener('click', function () {
        li.remove()
        const liComplete = document.createElement('li')
        liComplete.textContent = `${textoTarefa} - ${nivelPrioridade} - ${pegarData()}`
        liComplete.style.border = '3px solid rgb(11, 11, 70)'
        liComplete.style.color = 'rgb(220, 218, 218)'
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