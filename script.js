// alert("Teste");

// vamos criar agora o nosso js
// estou usando o node.js para criaçao das funcionalidades do site

// Redes sociais - clique nos ícones
document.querySelectorAll('.social-media a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const socialLinks = {
            'bxl-instagram': 'https://www.instagram.com/wesleymatox?igsh=MTZycWgxN3Z5dGd4OA==',
            'bxl-twitter': 'https://x.com/WesleymatosTJB',
            'bxl-linkedin': 'www.linkedin.com/in/wesley-matos-5a4b84254',
            'bxl-discord-alt': 'https://discord.gg/Ht4mNPDF'
        };
        const iconClass = event.target.classList[1];
        if (socialLinks[iconClass]) {
            window.open(socialLinks[iconClass], '_blank');
        }
    });
});

// Download do CV
document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();
    const cvUrl = 'https://drive.google.com/file/d/1Va0SCDeTUByW87_WlLGFAoKsjhfBLn8E/view?usp=sharing'; // Substitua pelo link de download real
    window.open(cvUrl, '_blank');
});




// Links dos Projetos do GitHub
document.querySelectorAll('.portifolio-layer a').forEach((link, index) => {
    const projectLinks = [
        'https://github.com/WesleySouza13/Projeto-Pre-o-a-oes-Vale',
        'https://github.com/WesleySouza13/Bank-Transaction-Dataset-for-Fraud-Detection',
        'https://www.linkedin.com/posts/wesley-matos-5a4b84254_quando-eu-estudei-sobre-a-lei-dos-grandes-activity-7266879899808792576-bK69?utm_source=share&utm_medium=member_desktop'
    ];
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(projectLinks[index], '_blank');
    });
});

// Envio de formulário (mailto)
document.querySelector('.contact form').addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('.contact input[placeholder="Nome Completo"]').value;
    const email = document.querySelector('.contact input[placeholder="E-mail"]').value;
    const mensagem = document.querySelector('.contact textarea').value;

    if (nome && email && mensagem) {
        const mailtoLink = `mailto:souzabusiness13@gmail.com?subject=Contato de ${nome}&body=Email: ${email}%0A%0AMensagem:%0A${mensagem}`;
        window.open(mailtoLink, '_blank');
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});