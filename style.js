const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () =>  {
        navMenu.classList.toggle('active');
    }); 
}

const links = document.querySelectorAll('nav a');
const conteudo = document.querySelector('main');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        const pagina = link.getAttribute('href');

        if (pagina.includes('index') || pagina.includes('projetos') || pagina.includes('cadastro')) {
            event.preventDefault();
            conteudo.innerHTML = `<h2>Carregando ${pagina.replace('.html', '')}...</h2><p>Simulação de SPA em funcionamento!</p>`;
            setTimeout(() => {
                window.location.href = pagina;
                }, 1000);
        }
    });
});

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.querySelector('#nome');
        const email = document.querySelector('#email');
        const cpf = document.querySelector('#cpf');
        const telefone = document.querySelector('#telefone');
        const data = document.querySelector('#data');
        const cep = document.querySelector('#cep');
        const cidade = document.querySelector('#cidade');
        const estado = document.querySelector('#estado');

        if (!nome.value || !email.value || !cpf.value || !telefone.value || !data.value || !cep.value || !cidade.value || !estado.value) {
            mostrarAviso('Por favor, preencha todos os campos obrigatórios.', 'erro');
            return;
        }

        mostrarAviso('Cadastro enviado com sucesso! 🎉', 'sucesso');
        form.reset();
        });
}

function mostrarAviso(mensagem, tipo) {
    const aviso = document.createElement('div');
    aviso.classList.add('alert');
    aviso.classList.add(tipo === 'erro' ? 'alert-error' : 'alert-success');
    aviso.textContent = mensagem;

    document.body.prepend(aviso)

    setTimeout(() => {
        aviso.remove();
    }, 3000);
}