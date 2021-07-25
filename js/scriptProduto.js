// Recebe informações do formulário

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let marca = document.getElementById('marca').value;
    let quantidade = document.getElementById('quantidade').value;
    let lote = document.getElementById('lote').value;
    let validade = document.getElementById('validade').value;

    let data = {
        nome,
        marca,
        quantidade,
        lote,
        validade,
    }

    // Adiciona informações do cadastro no LocalStorage

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let loading = `<p>Informações cadastradas com sucesso`

    content.innerHTML = loading;


})