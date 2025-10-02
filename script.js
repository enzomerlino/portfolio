function toggleDropdown() {
    const options = document.querySelector('.language-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        const content = translations[lang][key];

        // Verifica se o conteúdo tem HTML (como <a> ou &copy;) e usa innerHTML nesse caso
        if (content && content.includes('<')) {
            el.innerHTML = content;
        } else if (content) {
            el.textContent = content;
        }
    });

    // Atualiza texto do botão
    document.querySelector('.selected-language').textContent = lang === 'pt' ? 'PT' : 'EN';

    // Fecha o dropdown
    document.querySelector('.language-options').style.display = 'none';
}

const translations = {
    pt: {
        "sobre": "Sobre Mim",
        "projetos": "Projetos",
        "habilidades": "Habilidades",
        "contato": "Contato",
        "footer": '&copy; 2025 Enzo Merlino | Desenvolvido por <a href="https://github.com/enzomerlino">Enzo Merlino</a>',
        "filtro": "Filtrar por categoria:",
        "todos": "Todos",
        "sobre-descricao": "Olá! Meu nome é <strong>Enzo Merlino</strong>, sou estudante do último ano do Ensino Médio e um entusiasta de tecnologia. Desde que comecei a programar em 2023, venho me aprofundando em áreas como<strong>Banco de Dados</strong> e < strong > desenvolvimento web com PHP</strong>. <br><br> Tenho buscado constantemente evoluir minhas habilidades através de projetos práticos e estudos autodidatas. Gosto de criar interfaces bem estruturadas, soluções funcionais e aprender novas tecnologias que medesafiem.",
        "db": "Banco de Dados",
    },
        en: {
            "sobre": "About Me",
        "projetos": "Projects",
        "habilidades": "Skills",
        "contato": "Contact",
        "footer": '&copy; 2025 Enzo Merlino | Developed by <a href="https://github.com/enzomerlino">Enzo Merlino</a>',
        "filtro": "Sort by category:",
        "todos": "All",
        "sobre-descricao": "Hello! My name is Enzo Merlino, I am a senior in high school and a technology enthusiast. Since I started programming in 2023, I have been delving into areas such as <strong>Databases</strong> and <strong>web development with PHP</strong>. <br><br> I have constantly sought to develop my skills through practical projects and self-taught studies. I enjoy creating well-structured interfaces, functional solutions, and learning new technologies that challenge me.",
        "db": "Database",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        function activateLinkOnScroll() {
            let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            }
        });
    }

        window.addEventListener('scroll', activateLinkOnScroll);
});

        function filtrarProjetosDropdown() {
    const select = document.getElementById("filtro");
        const categoria = select.value;
        const cards = document.querySelectorAll('.repo-card');

    cards.forEach(card => {
        if (categoria === 'todos') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(categoria)) {
            card.style.display = 'block';
            } else {
            card.style.display = 'none';
            }
        }
    });
}

        function verificarVisibilidade() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Se a seção está no alcance da tela (não está oculta)
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

        // Chama a função ao rolar a página
        window.addEventListener('scroll', verificarVisibilidade);

        // Chama também na carga inicial da página para animar as seções visíveis já no começo
        document.addEventListener('DOMContentLoaded', verificarVisibilidade);

        document.addEventListener('DOMContentLoaded', function() {
    const fundoBolhas = document.querySelector('.fundo-bolhas');
        const numBolhas = 20; // Número de bolhas que você quer

        for (let i = 0; i < numBolhas; i++) {
        const bolha = document.createElement('div');
        bolha.classList.add('bolha');

        // Tamanhos aleatórios para as bolhas
        const tamanho = Math.random() * 80 + 20; // Bolhas entre 20px e 100px
        bolha.style.width = `${tamanho}px`;
        bolha.style.height = `${tamanho}px`;

        // Posições iniciais aleatórias
        bolha.style.left = `${Math.random() * 100}vw`;
        bolha.style.bottom = `${Math.random() * -100}vh`; // Começam de baixo da tela

        // Atraso na animação para um efeito mais interessante
        bolha.style.animationDelay = `${Math.random() * 5}s`;

        fundoBolhas.appendChild(bolha);
    }
});