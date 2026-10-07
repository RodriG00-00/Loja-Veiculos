// Selecionando os elementos do botão e do HTML
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Verifica se o usuário já tem uma preferência de tema salva
const currentTheme = localStorage.getItem('theme');

// Função para ativar o Modo Escuro
const enableDarkMode = () => {
    htmlElement.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun'); // Troca o ícone para o Sol
    localStorage.setItem('theme', 'dark');
};

// Função para ativar o Modo Claro
const disableDarkMode = () => {
    htmlElement.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon'); // Troca o ícone para a Lua
    localStorage.setItem('theme', 'light');
};

// Aplica o tema logo que a página carrega, baseando-se no histórico
if (currentTheme === 'dark') {
    enableDarkMode();
}

// Evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Se a classe 'dark' já existir no HTML, significa que está escuro, então desativamos
    if (htmlElement.classList.contains('dark')) {
        disableDarkMode();
    } else {
        // Caso contrário, ativamos
        enableDarkMode();
    }
});