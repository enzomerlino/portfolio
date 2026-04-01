const select = document.querySelector('.custom-select');
const trigger = select.querySelector('.select-trigger');
const options = select.querySelectorAll('.option');
const display = trigger.querySelector('span');

trigger.addEventListener('click', () => {
    select.classList.toggle('open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        display.textContent = option.textContent;
        select.classList.remove('open');

        const value = option.getAttribute('data-value');
        console.log('Idioma selecionado:', value);
    });
});

// fechar ao clicar fora
document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

// Modo Escuro / Modo Claro
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const icon = themeToggle.querySelector('i');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function updateIcon(theme) {
    icon.classList.add('icon-out');

    setTimeout(() => {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        icon.classList.remove('icon-out');
        icon.classList.add('icon-in');

        void icon.offsetWidth;

        icon.classList.remove('icon-in');
    }, 150);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    updateIcon(theme);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(prefersDark.matches ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});