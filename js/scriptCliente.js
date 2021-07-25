// Recebe informações do formulário

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let cep = document.getElementById('cep').value;

    let data = {
        nome,
        cpf,
        email,
        celular,
        cep,
    }

    // Adiciona informações do cadastro no LocalStorage

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let loading = `<p>Informações cadastradas com sucesso`

    content.innerHTML = loading;


})